import React, { Component } from 'react'
// import './App.css'
import users from './Users.json'
import Card from './components/Card'
import Search from './components/Search'
import UserTable from './components/UserTable'

class App extends Component {
  componentDidMount() {
    console.log(UserTable.users)
  }
  state = {
    first_name: '',
    users
  }

  // grab value by text input
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // grab value from text input and create card
  handleSubmit = event => {
    event.preventDefault()
    // console.log('ping')

    this.setState({
      users: {
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        department: this.state.department,
        job_title: this.state.job_title,
        email: this.state.email,
        phone_number: this.state.phone_number
      }
    })
  }

  // return JSX
  render() {
    return (
      <>
        <h1>Employee Directory</h1>
        <Search
          id={this.state.id}
          first_name={this.state.first_name}
          last_name={this.state.last}
          department={this.state.department}
          job_title={this.state.job_title}
          email={this.state.email}
          phone_number={this.state.phone_number}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />
        {this.state.first_name ? <Card userCard={this.state.first_name} /> : null}
        <hr />
        <UserTable />
      </>
    )
  }
}

export default App;
