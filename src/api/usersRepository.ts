import { API_AUTH_URL } from '../chatify/constants/api';
import { IAuthenticationResponse } from '../chatify/models/IAuthenticationResponse';

export const loginApiAsync = async (email: string): Promise<IAuthenticationResponse> => {
    return new Promise(async (resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json-patch+json' },
            body: JSON.stringify({ email })
        };
        try {
            const response = await fetch(API_AUTH_URL, requestOptions);
            if (response.ok) {
                const authResponse: IAuthenticationResponse = await response.json();
                resolve(authResponse);
            } else {
                reject(response);
            }
        } catch (e) {
            reject(e);
        }
    });
};

