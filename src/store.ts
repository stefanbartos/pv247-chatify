import { createStore, applyMiddleware, compose } from 'redux';
import { getInitialChannels } from './chatify/utils/initialChannels';
import { rootReducer } from './common/rootReducer';
import { getInitialMessages } from './chatify/utils/initialMessages';
import thunk from 'redux-thunk';

const initialState = {
    chatify: {
        channels: getInitialChannels(),
        messageList: getInitialMessages(),
    }
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

export const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)
));
