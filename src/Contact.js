import React from 'react'

const Contact = (props) => (
  <li className={`contact ${props.selected ? 'active' : ''}`} onClick={(e) => {
    console.log('select called')
    props.onContactSelect(props.id)
    e.stopPropagation()
  }}>
    <div className='wrap'>
      <span className={`contact-status ${props.status}`} />
      <img src={'https://image.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-260nw-387516193.jpg'} alt='' />
      <div className='meta'>
        <p className='name'>{props.id}</p>
        <p className='preview'>{props.preview}</p>
      </div>
    </div>
  </li>
)
export default Contact
