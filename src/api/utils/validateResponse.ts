export async function validateResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
        return await response.json() as T;
    }
    else {
        const errorMessge = response.statusText || `Something went wrong (ending up in ${response.status})`;
        const error = new Error(errorMessge);

        throw error;
    }
}
