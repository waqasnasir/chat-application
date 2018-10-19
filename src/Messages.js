import React from 'react'

const Messages = (props) => <div class="messages">
    <ul>
        {
            props.messages && props.messages.map(message =>
                <li class={`${message.type}`}>
                    <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                    <p>{message.message}</p>
                </li>
            )
        }
    </ul>
</div>

export default Messages