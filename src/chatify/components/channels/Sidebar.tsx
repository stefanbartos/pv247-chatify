import * as React from 'react';

const channels = [
    'first channel',
    'second channel'
];

export class Sidebar extends React.PureComponent {
    render() {
        return (
            <nav className="sidebar-nav">
                <div className="sidebar-header">
                    Channels
                </div>
                <ul className="sidebar-nav">
                    {channels.map(channel => (
                        <li key={channel}>{channel}</li>
                    ))}
                </ul>
                <div id="bottom">
                    <button type="button" className="btn btn-info">Add channel</button>
                </div>
            </nav>
        );
    }
}
