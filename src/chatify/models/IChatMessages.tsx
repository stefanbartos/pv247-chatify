import * as Immutable from 'immutable';
import {IChatMessage} from "./IChatMessage";

export interface IChatMessages {
    messageIdsList: Immutable.List<Uuid>;
    messageId: Immutable.Map<Uuid, IChatMessage>;
}
