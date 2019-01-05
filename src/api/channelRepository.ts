export const createChannelApiAsync = (channelName: string, token: string) => {
    

    return new Promise(async (resolve, reject) => {
        console.log(channelName);
        resolve(1);
        reject(1);
    });
};
