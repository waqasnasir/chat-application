import React from 'react'

const Messages = (props) =>
  <div className='messages'>
    <ul>
      {
        props.messages && props.messages.map((message, index) =>
          <li key={index} className={`${message.from === props.me ? 'sent' : 'replies'}`}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_nySYgvYJrWrRbDDBoo1izr89qHXzS_GujLRyi2JcrDv3QVmrQ' alt='' />
            <p>{message.message}</p>
          </li>
        )
      }
    </ul>
  </div>

export default Messages
