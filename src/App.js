import React, { Component } from 'react';
import logo from './logo.svg';
import ContactsList from './ContactsList'
import ContactContent from './ContactContent'
import contacts from './data'
import './App.css';
import io from 'socket.io-client'
// const io = require('socket.io-client')

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected:0
		}
		this.socket = io.connect('http://localhost:5000')
		this.onContactSelect = (id) => {
			this.setState({selected:id})
		}
		this.socket.on('RECEIVE_MESSAGE', function(data){
			console.log('messaage recived', data)
		});
		this.socket.emit('SEND_MESSAGE', 'hi there')
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
