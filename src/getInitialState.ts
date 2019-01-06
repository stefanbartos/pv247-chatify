import { getPersistedToken, getPersistedEmail } from './common/localStorageUtils';

export const getInitialState = () => ({
    chatify: {
        token: getPersistedToken(),
        email: getPersistedEmail()
    }
});
