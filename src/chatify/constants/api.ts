const API_URL: string = 'https://pv247messaging.azurewebsites.net/api/v2';
const API_APP_ID: Uuid = '4d274b79-c813-4eb5-8cb5-372151c63307';
const API_BASE_APP_URL: string = `${API_URL}/app/${API_APP_ID}`;

// AUTHENTICATION
export const createApiAuthenticationUrl = () => `${API_URL}/auth`;

// USER INFO
const API_USER_URL: string = `${API_URL}/${API_APP_ID}/user`;
export const createUserRegistrationApiUrl = () => API_USER_URL;
export const createApiSpecificUserUrl = (email: string) => `${API_USER_URL}/${email}`;

// FILE
export const API_UPLOAD_FILE_URL = `${API_URL}/file`;
export const createApiDownloadFileUri = (fileId: string) => `${API_URL}/file/${fileId}/download-link`;

// MESSAGE
export const createApiMessageUrl = (channelId: string) => `${API_BASE_APP_URL}/channel/${channelId}/message`;
export const deleteApiMessageUrl = (channelId: string, chatMessageId: string) => `${API_BASE_APP_URL}/channel/${channelId}/message/${chatMessageId}`;
export const updateApiMessageUrl = (channelId: string, chatMessageId: string) => `${API_BASE_APP_URL}/channel/${channelId}/message/${chatMessageId}`;

// CHANNEL
export const API_CHANNEL_URL = `${API_BASE_APP_URL}/channel`;
export const createSpecificChannelUrl = (channelId: string) => `${API_BASE_APP_URL}/channel/${channelId}`;
