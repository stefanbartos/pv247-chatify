import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    chatify: {
        token: getPersistedToken()
    }
});
