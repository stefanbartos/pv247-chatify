import { AUTHENTICATION_KEYS } from '../chatify/constants/localStorageKeys';
import * as localStorageKeys from '../chatify/constants/localStorageKeys';

export const removeAuthenticationDataFromLocalStorage = () => {
    AUTHENTICATION_KEYS.forEach(key => localStorage.removeItem(key));
};

export const allAuthenticationDataAreSet = () =>
    AUTHENTICATION_KEYS.every(key => localStorage.getItem(key) !== null);

export const setAuthenticationDataToLocalStorage = (token: string, tokenExpirationDate: string, email: string) => {
    localStorage.setItem(localStorageKeys.TOKEN, JSON.stringify(token));
    localStorage.setItem(localStorageKeys.TOKEN_EXPIRATION, JSON.stringify(tokenExpirationDate));
    localStorage.setItem(localStorageKeys.EMAIL, JSON.stringify(email));
};
