export async function validateResponse(response: Response): Promise<any> {
    if (response.ok) {
        return await response.json();
    }
    else {
        const errorMessge = response.statusText || `Something went wrong (ending up in ${response.status})`;
        const error = new Error(errorMessge);

        throw error;
    }
}
