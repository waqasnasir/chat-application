import React, { Component } from 'react';
import logo from './logo.svg';
import ContactsList from './ContactsList'
import ContactContent from './ContactContent'
import contacts from './data'
import './App.css';

class App extends Component {
	state = {
		selected:0
	}
	onContactSelect = (id) => {
		this.setState({selected:id})
	 }
	render() {
		return (
			<div>
				<div id="sidepanel">
					<div id="profile">
						<div className="wrap">
							<img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
							<p>Mike Ross</p>
							<i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
							<div id="status-options">
								<ul>
									<li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
									<li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
									<li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
									<li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
								</ul>
							</div>
							{/* <div id="expanded">
								<label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
								<input name="twitter" type="text" value="mikeross" />
								<label for="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
								<input name="twitter" type="text" value="ross81" />
								<label for="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
								<input name="twitter" type="text" value="mike.ross" />
							</div> */}
						</div>
					</div>
					<div id="search">
						<label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
						<input type="text" placeholder="Search contacts..." />
					</div>
					<ContactsList contacts={contacts} onContactSelect={this.onContactSelect} selected={this.state.selected}/>
				</div>
				<ContactContent contact={contacts.find(contact => contact.id===this.state.selected)}/>
			</div>
		);
	}
}

export default App;
