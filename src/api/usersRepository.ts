import { createApiAuthenticationUrl, createUserRegistrationApiUrl } from './../chatify/constants/api';
import { IAuthenticationResponse } from '../chatify/models/IAuthenticationResponse';
import { IUserRegistrationResponse } from '../chatify/models/IUserRegistrationResponse';

export const loginApiAsync = async (email: string): Promise<IAuthenticationResponse> => {
    return new Promise(async (resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json-patch+json' },
            body: JSON.stringify({ email })
        };
        try {
            const response = await fetch(createApiAuthenticationUrl(), requestOptions);
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

export const registerApiAsync = async (email: string): Promise<IUserRegistrationResponse> => {
    return new Promise(async (resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        };

        try {
            const response = await fetch(createUserRegistrationApiUrl(), requestOptions);
            console.log(response);
            if (response.ok) {
                const userRegistrationResponse: IUserRegistrationResponse = await response.json();
                resolve(userRegistrationResponse);
            } else {
                reject(response);
            }
        } catch (e) {
            reject(e);
        }
    });
};
