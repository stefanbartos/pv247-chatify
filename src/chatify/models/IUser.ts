export interface IUser {
    readonly email: string;
    readonly token: string;
    readonly expiration: Date;
}
