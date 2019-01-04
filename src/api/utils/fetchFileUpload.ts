import { validateResponse } from './validateResponse';

export const fetchFileUpload = async (url: string, token: string, file: File) => {
    const formData = new FormData();
    formData.append('Files', file);

    return fetch(
        url,
        {
            method: 'POST',
            headers: {
                Authorization: `bearer ${token}`,
                Accept: 'application/json',
            },
            body: formData,
        })
        .then(validateResponse);
};
