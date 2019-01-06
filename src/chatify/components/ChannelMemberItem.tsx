import * as React from 'react';

interface IChannelMeberItemOwnProps {
    readonly index: number;
    readonly memberEmail: string;
}

export const ChannelMemberItem: React.SFC<IChannelMeberItemOwnProps> = (props) => {
    const { index, memberEmail } = props;
    return (
        <li key={index} className="nav-item">
            <a>{memberEmail}</a>
        </li>
    );
};
