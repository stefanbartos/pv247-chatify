import * as Immutable from 'immutable';
import {IChatMessage} from './IChatMessage';

export interface IChatMessages {
    messageId: Immutable.Map<Uuid, IChatMessage>;
}
