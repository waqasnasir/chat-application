import React from 'react'
import Contact from './Contact'

class ContactsList extends React.Component {
	render() {
		const { contacts } = this.props;
		console.log(contacts)
		return (
			<div id="contacts">
				<ul>
					{
						contacts && contacts.map(contact =>
							<Contact
								id={contact.id}
								selected={contact.id === this.props.selected}
								onContactSelect={this.props.onContactSelect}
								profile={contact.profile}
								name={contact.name}
								status={contact.status}
								preview={contacts.messages && contacts.messages.pop().message}
							/>
						)
					}
				</ul>
			</div>
		);
	}
}
export default ContactsList