import { AUTHENTICATION_KEYS } from '../chatify/constants/localStorageKeys';
import * as localStorageKeys from '../chatify/constants/localStorageKeys';

const allAuthenticationDataAreSet = () =>
    AUTHENTICATION_KEYS.every(key => localStorage.getItem(key) !== null);

const isTokenValid = () => {
    const persistedExpirationJson: string | null = localStorage.getItem(localStorageKeys.TOKEN_EXPIRATION);
    if (persistedExpirationJson === null) {
        return false;
    }
    const expirationDate: Date = new Date(JSON.parse(persistedExpirationJson));
    return expirationDate.getTime() > Date.now();
};

export const getPersistedToken = (): string | null => {
    const persistedTokenJson: string | null = localStorage.getItem(localStorageKeys.TOKEN);
    if (!allAuthenticationDataAreSet() || !isTokenValid()) {
        removeAuthenticationDataFromLocalStorage();
        return null;
    }
    return persistedTokenJson && JSON.parse(persistedTokenJson);
};
export const setAuthenticationDataToLocalStorage = (token: string, tokenExpirationDate: string, email: string) => {
    localStorage.setItem(localStorageKeys.TOKEN, JSON.stringify(token));
    localStorage.setItem(localStorageKeys.TOKEN_EXPIRATION, JSON.stringify(tokenExpirationDate));
    localStorage.setItem(localStorageKeys.EMAIL, JSON.stringify(email));
};

export const removeAuthenticationDataFromLocalStorage = () => {
    AUTHENTICATION_KEYS.forEach(key => localStorage.removeItem(key));
};

export const getPersistedEmail = (): string | null => {
    const email: string | null = localStorage.getItem(localStorageKeys.EMAIL);
    if (!allAuthenticationDataAreSet()) {
        removeAuthenticationDataFromLocalStorage();
        return null;
    }
    return email && JSON.parse(email);
};
