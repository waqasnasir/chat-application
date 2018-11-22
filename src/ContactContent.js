import React from 'react'
import Profile from './Profile'
import Messages from './Messages'

class ContactContent extends React.Component {
  constructor () {
    super()
    this.state = {
      message: ''
    }
  }

  render () {
    const { id, imageUrl } = this.props.user
    const { messages, me } = this.props
    return (
      <div className='content'>
        <Profile
          name={id}
          profile={imageUrl}
        />
        <Messages
          messages={messages}
          me={me}
        />
        <div className='message-input'>
          <form className='commentForm' onSubmit={(e) => { e.preventDefault(); this.props.onSendMessage(this.state.message) }}>
            <div className='wrap'>
              <input type='text' placeholder='Write your message...' onChange={(e) => this.setState({ message: e.target.value })} />
              {/* <i className="fa fa-paperclip attachment" aria-hidden="true"></i> */}
              <button className='' type='submit'><i className='fa fa-paper-plane' aria-hidden='true' /></button>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default ContactContent
