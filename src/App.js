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
			selected:0,
			users:[],
			myProfile: {
				id:null,
				name:'temp',
				imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_nySYgvYJrWrRbDDBoo1izr89qHXzS_GujLRyi2JcrDv3QVmrQ'
			}
		}
		this.socket = io.connect('http://localhost:5000')
		this.onContactSelect = (id) => {
			this.setState({selected:id})
		}
		this.socket.on('RECEIVE_MESSAGE', (data) => {
			console.log('messaage recived', data)
		});
		this.socket.on('YOUR_ID', (id) => {
			console.log('id received', id)
			this.setState({myProfile:{...this.state.myProfile, id}})
		});
		this.socket.on('RECEIVE_USERS', (users) => {
			console.log('id received', users)
			this.setState({users})
		})
		this.socket.emit('SEND_MESSAGE', 'hi there')
	}

	componentWillUnmount(){
		this.socket.disconnect(this.state.myProfile.id)
	}
	
	render() {
		const { myProfile, users } = this.state;
		return (
			<div>
				<div id="sidepanel">
					<div id="profile">
						<div className="wrap">
							<img id="profile-img" src={myProfile.imageUrl} className="online" alt="" />
							<p>{myProfile.name}</p>
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
					<ContactsList contacts={users} onContactSelect={this.onContactSelect} selected={this.state.selected}/>
				</div>
				<ContactContent contact={contacts.find(contact => contact.id===this.state.selected)}/>
			</div>
		);
	}
}

export default App;
