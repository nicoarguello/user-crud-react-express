import React from 'react'
import Title from "../MainContent/Title";
import UserRow from "./UserRow";
import {dispatchUsers} from '../../actions'
import {connect} from "react-redux";
import {useEffect} from 'react';
import axios from 'axios';

const UserList = ({UsersList, dispatchUsers}) => {
    useEffect(() => {
        axios.get("/api/v1/users/all")
            .then(({data}) => {
                dispatchUsers(data)
            })
    },[dispatchUsers])
    return (
        <div className="card">
            <Title/>
            <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>User name</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (UsersList.length > 0) ?
                            UsersList.map(user =>
                                <UserRow
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    lastName={user.lastName}
                                    email={user.email}
                                    phone={user.phone}
                                    userName={user.userName}
                                    position={user.position}
                                />
                            ) : "No hay usuarios que cargar"
                    }
                    </tbody>
                </table>
            </div>
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        UsersList: state.UsersList,
    }
}

export default connect(mapStateToProps, {dispatchUsers})(UserList)

// export default UserList;

