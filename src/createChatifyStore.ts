import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './common/rootReducer';
import thunk from 'redux-thunk';
import { getInitialState } from './getInitialState';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createChatifyStore = () => {
    const middleware = [thunk];

    return createStore(
        rootReducer,
        getInitialState(),
        composeEnhancers(applyMiddleware(...middleware))
    );
};
