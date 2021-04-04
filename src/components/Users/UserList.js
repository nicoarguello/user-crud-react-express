import React, { Component } from 'react'
import UserRow from './UserRow'

const UserList = () => {
    return (
        <table id="example1" className="table table-bordered table-striped">
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            <UserRow />
          </tbody>
        </table>
    
    )

}

export default UserList;