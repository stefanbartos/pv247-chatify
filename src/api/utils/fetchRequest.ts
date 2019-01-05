import { validateResponse } from './validateResponse';

export const fetchRequest = (url: string, token: string, bodyJson: any | undefined) =>
    fetch(
        url,
        {
            method: 'POST',
            headers: {
                Authorization: `bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(bodyJson),
        })
        .then(validateResponse);
