import { validateResponse } from './validateResponse';

export const fetchDelete = (url: string, token: string) =>
    fetch(
        url,
        {
            method: 'DELETE',
            headers: {
                Authorization: `bearer ${token}`,
                Accept: 'application/json',
            },
        })
        .then(validateResponse);
