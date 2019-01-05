import { getInitialMessages } from './chatify/utils/initialMessages';
import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    chatify: {
        messageList: getInitialMessages(),
        token: getPersistedToken()
    }
});
