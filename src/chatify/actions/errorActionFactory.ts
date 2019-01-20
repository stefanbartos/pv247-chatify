import * as uuid from 'uuid';

export const errorActionFactory = (actionType: string) =>
    (errorMessage: string, error: any = {}): Action => {
        return {
            type: actionType,
            payload: {
                error: {
                    id: uuid(),
                    message: errorMessage,
                    statusText: error.message
                }
            }
        };
    };
