import * as React from 'react';



const channels = [
    'first channel',
    'second channel'
];

export class Sidebar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-header">
                    Channels
                </div>

                <div className="sidebar">
                    <ul>
                        {channels.map(channel => (
                            <li key={channel}>{channel}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
