import { IUserDetails } from './../chatify/models/IUserDetails';
import { createApiAuthenticationUrl, createUserRegistrationApiUrl, createApiSpecificUserUrl, API_UPLOAD_FILE_URL, createApiDownloadFileUri } from './../chatify/constants/api';
import { IAuthenticationResponse } from '../chatify/models/IAuthenticationResponse';
import { IUserRegistrationResponse } from '../chatify/models/IUserRegistrationResponse';
import { convertToServerDetails, convertFromServerUserDetails } from './utils/conversion/profileUserDetails';
import { fetchUpdate } from './utils/fetchUpdate';
import { fetchReceive } from './utils/fetchReceive';
import { fetchFileUpload } from './utils/fetchFileUpload';
import { validateResponse } from './utils/validateResponse';

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
            const response = await fetch(createUserRegistrationApiUrl(), requestOptions)
                .then(validateResponse);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};

export const uploadUserDetailsApiAsync = async (userDetails: IUserDetails, token: string) => {
    const url = createApiSpecificUserUrl(userDetails.email);
    const serverDetail = convertToServerDetails(userDetails);

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetchUpdate(url, token, serverDetail);
            const updatedDetails = convertFromServerUserDetails(response);
            resolve(updatedDetails);
        } catch (err) {
            reject(err);
        }
    });
};

export const getUserDetailsApiAsync = async (email: string, token: string) => {
    const url = createApiSpecificUserUrl(email);

    return new Promise(async (resolve, reject) => {
        try {
            const serverDetails = await fetchReceive(url, token);
            const receivedUserDetails = convertFromServerUserDetails(serverDetails);
            resolve(receivedUserDetails);
        } catch (err) {
            reject(err);
        }
    });
};

export const uploadFileApiAsync = async (file: File, token: string): Promise<any> => {
    const url = API_UPLOAD_FILE_URL;

    return new Promise(async (resolve, reject) => {
        try {
            const serverUploadResponse = await fetchFileUpload(url, token, file);
            resolve(serverUploadResponse);
        } catch (err) {
            reject(err);
        }
    });
};

export const fetchFileApiAsync = async (fileId: string, token: string): Promise<any> => {
    const url = createApiDownloadFileUri(fileId);

    return new Promise(async (resolve, reject) => {
        try {
            const serverResponse = await fetchReceive(url, token);
            resolve(serverResponse);
        } catch (err) {
            reject(err);
        }
    });
};
