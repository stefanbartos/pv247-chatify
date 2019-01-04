import * as React from 'react';
import * as Picture from '../../images/default-profile.png';

interface IAvatarImageProps {
    url?: string;
}

const imgStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

export const AvatarImage: React.SFC<IAvatarImageProps> = ({ url }) => {
    return (
        <img
            style={imgStyle}
            src={url || Picture}
            alt="Avatar image"
            className="avatar" />
    );
};
