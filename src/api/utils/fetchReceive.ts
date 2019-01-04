import { validateResponse } from './validateResponse';

export const fetchReceive = (url: string, token: string) =>
    fetch(
        url,
        {
            method: 'GET',
            headers: {
                Authorization: `bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        .then(validateResponse);
