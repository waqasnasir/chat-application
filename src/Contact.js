import React from 'react'

const Contact = (props) => (
    <li className={`contact ${props.selected?'active':''}`} onClick={()=>props.onContactSelect(props.id)}>
        <div className="wrap">
            <span className={`contact-status ${props.status}`}></span>
            <img src={'https://image.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-260nw-387516193.jpg'} alt="" />
            <div className="meta">
                <p className="name">{props.id}</p>
                <p className="preview">{props.preview}</p>
            </div>
        </div>
    </li>
)
export default Contact