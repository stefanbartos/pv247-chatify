import { IUserDetails } from './../chatify/models/IUserDetails';
import { createApiAuthenticationUrl, createUserRegistrationApiUrl, createApiSpecificUserUrl } from './../chatify/constants/api';
import { IAuthenticationResponse } from '../chatify/models/IAuthenticationResponse';
import { IUserRegistrationResponse } from '../chatify/models/IUserRegistrationResponse';
import { convertToServerDetails, convertFromServerUserDetails } from './utils/conversion/profileUserDetails';
import { fetchUpdate } from './utils/fetchUpdate';

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

export const uploadUserDetailsApiAsync = async (userDetails: IUserDetails, token: string) => {
    const url = createApiSpecificUserUrl(userDetails.email);
    const serverDetail = convertToServerDetails(userDetails);

    return new Promise(async (resolve, reject) => {
        try {
            console.log(serverDetail);
            const response = await fetchUpdate(url, token, serverDetail);
            const updatedDetails = convertFromServerUserDetails(response);
            resolve(updatedDetails);
        } catch (err) {
            reject(err);
        }
    });
};
