export const Request = (method: string , body: any) => {
    const request: any = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json-patch+json',
        }
    };

    request.body = JSON.stringify(body);
    return request;
};
