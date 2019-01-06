import { EMAIL } from './chatify/constants/localStorageKeys';
import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    chatify: {
        token: getPersistedToken(),
        email: localStorage.getItem(EMAIL)
    }
});
