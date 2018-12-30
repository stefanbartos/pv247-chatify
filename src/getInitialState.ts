import { getInitialChannels } from './chatify/utils/initialChannels';
import { getInitialMessages } from './chatify/utils/initialMessages';
import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    chatify: {
        channels: getInitialChannels(),
        messageList: getInitialMessages(),
        token: getPersistedToken()
    }
});
