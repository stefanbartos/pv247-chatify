import { API_URL } from './helpers/AppConfig';
import { IUser } from '../chatify/models/IUser';
export const userRepository = {
    login
};

export const loginApiAsync = async (email: string): Promise<IUser> => {
    return new Promise(async (resolve, reject) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json-patch+json' },
            body: JSON.stringify({ email })
        };
        try {
            const response = await fetch(`${API_URL}/auth`, requestOptions);
            if (response.ok) {
                const json = await response.json();
                resolve({ email, token: json.token, expiration: json.expiration });
            } else {
                reject(response);
            }
        } catch (e) {
            reject(e);
        }
    });
};

function login(email: string): any {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json-patch+json' },
        body: JSON.stringify({ email })
    };

    return fetch(`${API_URL}/auth`, requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response.token) {
                localStorage.setItem('token', response.token);
            }

            return response;
        });
}

function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
