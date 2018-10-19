import React from 'react'
import Profile from './Profile'
import Messages from './Messages'

class ContactContent extends React.Component {
    render() {
        const { name, profile, messages } = this.props.contact
        return (
            <div class="content">
                <Profile
                    name={name}
                    profile={profile}
                />
                <Messages
                    messages={messages}
                />
                <div class="message-input">
                    <div class="wrap">
                        <input type="text" placeholder="Write your message..." />
                        <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
                        <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactContent