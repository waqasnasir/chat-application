import React from 'react'

const Contact = (props) => (
    <li className={`contact ${props.selected?'active':''}`} onClick={()=>props.onContactSelect(props.id)}>
        <div className="wrap">
            <span className={`contact-status ${props.status}`}></span>
            <img src={props.profile} alt="" />
            <div className="meta">
                <p className="name">{props.name}</p>
                <p className="preview">{props.preview}</p>
            </div>
        </div>
    </li>
)
export default Contact