import React, { Component } from 'react'
import logo from './logo.svg'
import ContactsList from './ContactsList'
import ContactContent from './ContactContent'
import './App.css'
import io from 'socket.io-client'
// const io = require('socket.io-client')

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      users: [],
      visibleUsers: [],
      messages: [],
      myProfile: {
        id: null,
        name: 'temp',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_nySYgvYJrWrRbDDBoo1izr89qHXzS_GujLRyi2JcrDv3QVmrQ'
      }
    }
    this.socket = io.connect('http://localhost:5000')
    this.onContactSelect = (id) => {
      this.setState({ selected: id })
    }

    this.onSendMessage = (messageStr) => {
      console.log('send message', this.state.myProfile.id)
      const message = { from: this.state.myProfile.id, message: messageStr, to: this.state.selected }
      this.socket.emit('SEND_MESSAGE', message)
      this.setState({ messages: [...this.state.messages, message] })
    }

    this.searchUser = (e) => {
      const searchTerm = e.target.value
      if (searchTerm === '') {
        this.setState({ visibleUsers: this.state.users })
        return
      }
      const filteredUsers = this.state.visibleUsers.filter(user => user.id.includes(searchTerm))
      this.setState({ visibleUsers: filteredUsers })
    }

    this.socket.on('RECEIVE_MESSAGE', (message) => {
      console.log('messaage recived', message)
      this.setState({ messages: [...this.state.messages, message] })
    })
    this.socket.on(`${this.state.myProfile.id}`, (data) => {
      console.log('messaage recived', data)
    })
    this.socket.on('YOUR_ID', (id) => {
      console.log('id received', id)
      this.setState({ myProfile: { ...this.state.myProfile, id } })
    })
    this.socket.on('RECEIVE_USERS', (users) => {
      console.log('id received', users)
      let newUsers = users.filter(user => user.id !== this.state.myProfile.id)
      this.setState({ users: newUsers, selected: newUsers[0].id, visibleUsers: users })
    })
    // this.socket.emit('SEND_MESSAGE', 'hi there')
  }

  componentWillUnmount () {
    this.socket.disconnect(this.state.myProfile.id)
  }

  render () {
    const { myProfile, users, selected, visibleUsers } = this.state
    return (
      <div>
        <div id='sidepanel'>
          <div id='profile'>
            <div className='wrap'>
              <img id='profile-img' src={myProfile.imageUrl} className='online' alt='' />
              <p>{myProfile.id}</p>
              <i className='fa fa-chevron-down expand-button' aria-hidden='true' />
            </div>
          </div>
          <div id='search'>
            <label htmlFor=''><i className='fa fa-search' aria-hidden='true' /></label>
            <input type='text' placeholder='Search contacts...' onChange={this.searchUser} />
          </div>
          <ContactsList contacts={visibleUsers} onContactSelect={this.onContactSelect} selected={selected} />
        </div>
        <ContactContent onSendMessage={this.onSendMessage} me={myProfile.id} messages={this.state.messages.filter(message => message.to === selected || message.from === selected) || []} user={users.find(user => user.id === selected) || {}} />
      </div>
    )
  }
}

export default App
