import React from 'react'

const Contact = (props) => (
    <li class={`contact ${props.selected?'active':''}`} onClick={()=>props.onContactSelect(props.id)}>
        <div class="wrap">
            <span class={`contact-status ${props.status}`}></span>
            <img src={props.profile} alt="" />
            <div class="meta">
                <p class="name">{props.name}</p>
                <p class="preview">{props.preview}</p>
            </div>
        </div>
    </li>
)
export default Contact