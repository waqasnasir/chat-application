import React from 'react'

const Profile = (props) => (
    <div className="contact-profile">
        <img src={props.profile} alt="" />
        <p>{props.name}</p>
        {/* <div class="social-media">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
        </div> */}
    </div>
)
export default Profile