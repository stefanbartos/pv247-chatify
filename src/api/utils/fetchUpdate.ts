import { validateResponse } from './validateResponse';

export const fetchUpdate = (url: string, token: string, bodyJson: any) =>
    fetch(
        url,
        {
            method: 'PUT',
            headers: {
                Authorization: `bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(bodyJson),
        })
        .then(validateResponse);
