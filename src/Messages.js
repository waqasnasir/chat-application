import React from 'react'

const Messages = (props) =>
    <div className="messages">
        <ul>
            {
                props.messages && props.messages.map((message, index) =>
                    <li key={index} className={`${message.type}`}>
                        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                        <p>{message.message}</p>
                    </li>
                )
            }
        </ul>
    </div>

export default Messages