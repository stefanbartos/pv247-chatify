import { profile } from './profile/profile';
import { isLoggingIn } from './isLogginIn';
import { IChatify } from '../models/IChatify';
import { channels } from './channel/channels';
import { messages } from './messages';
import { token } from './token';
import { isLoggedIn } from './isLoggedIn';
import { email } from './email';
import { errors } from './errors';
import { isRegistering } from './isRegistering';

export const chatify = (prevState = {} as IChatify, action: Action): IChatify => ({
    channels: channels(prevState.channels, action),
    messageList: messages(prevState.messageList, action),
    activeChannel: '',
    isLoggingIn: isLoggingIn(prevState.isLoggingIn, action),
    isLoggedIn: isLoggedIn(prevState.isLoggedIn, action),
    isRegistering: isRegistering(prevState.isRegistering, action),
    token: token(prevState.token, action),
    profile: profile(prevState.profile, action),
    email: email(prevState.email, action),
    errors: errors(prevState.errors, action)
});
