import * as localStorageKeys from './chatify/constants/localStorageKeys';
import { removeAuthenticationDataFromLocalStorage } from './common/localStorageUtils';

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
    if (persistedTokenJson && !isTokenValid()) {
        removeAuthenticationDataFromLocalStorage();
        return null;
    }
    return persistedTokenJson && JSON.parse(persistedTokenJson);
};
