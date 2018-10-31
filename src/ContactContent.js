import React from 'react'
import Profile from './Profile'
import Messages from './Messages'

class ContactContent extends React.Component {
    render() {
        const { name, profile, messages } = this.props.contact
        return (
            <div className="content">
                <Profile
                    name={name}
                    profile={profile}
                />
                <Messages
                    messages={messages}
                />
                <div className="message-input">
                    <div className="wrap">
                        <input type="text" placeholder="Write your message..." />
                        {/* <i className="fa fa-paperclip attachment" aria-hidden="true"></i> */}
                        <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactContent