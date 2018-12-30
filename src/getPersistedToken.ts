import * as localStorageKeys from './chatify/constants/localStorageKeys';

const removeTokenFromLocalStorage = () => {
    localStorage.removeItem(localStorageKeys.TOKEN);
    localStorage.removeItem(localStorageKeys.TOKEN_EXPIRATION);
};

const isTokenValid = () => {
    const persistedExpirationJson: string | null = localStorage.getItem(localStorageKeys.TOKEN_EXPIRATION);
    if (persistedExpirationJson === null) {
        return false;
    }
    const expirationDate: Date = new Date(JSON.parse(persistedExpirationJson));
    return expirationDate.getTime() < Date.now();
};

export const getPersistedToken = (): string | null => {
    const persistedTokenJson: string | null = localStorage.getItem(localStorageKeys.TOKEN);
    if (persistedTokenJson && !isTokenValid()) {
        removeTokenFromLocalStorage();
        return null;
    }
    return persistedTokenJson && JSON.parse(persistedTokenJson);
};
