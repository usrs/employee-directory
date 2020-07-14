// bring in React package
import React, { Component } from 'react'
// bring in Table component form Reactstrap
import { Table } from 'reactstrap'
import UserData from '../../Users.json'

class UserTable extends Component {

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Department</th>
            <th>Job Title</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        {UserData.map((userDetail, index) => {
          return <tbody>
            <tr>
              <th scope="row"></th>
              <td>{userDetail.id}</td>
              <td>{userDetail.last_name}</td>
              <td>{userDetail.first_name}</td>
              <td>{userDetail.department}</td>
              <td>{userDetail.job_title}</td>
              <td>{userDetail.email}</td>
              <td>{userDetail.phone_number}</td>
            </tr>
          </tbody>
        })}
      </Table>
    )
  }
}

export default UserTable