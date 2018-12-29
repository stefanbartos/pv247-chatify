const API_URL: string = 'https://pv247messaging.azurewebsites.net/api/v2';
const API_APP_ID: Uuid = '4d274b79-c813-4eb5-8cb5-372151c63307';

export const API_AUTH_URL = `${API_URL}/auth`;

// USER INFO
export const createApiUserUri = (email: string) => `${API_URL}/${API_APP_ID}/user/${email}`;

// FILE
export const createApiFileUri = () => `${API_URL}/file`;
export const createApiDownloadFileUri = (file: string) => `${API_URL}/file/${file}/download-link`;
