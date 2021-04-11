import React from 'react'
import DataTable from 'react-data-table-component';
// import UserRow from './UserRow'
import Title from "../MainContent/Title";

const UserList = () => {
    const data = [
        {
            id: 1,
            name: 'Juan Eduardo',
            LastName: 'Perez Galindo',
            phone: '+57-321587987',
            email: 'juan@gamil.com',
            actions: 'Actions'
        }
    ];
    const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Last name',
            selector: 'LastName',
            sortable: true,
        },
        {
            name: 'Phone',
            selector: 'phone',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Actions',
            selector: 'actions',
            sortable: true,
        }
    ]
    // return (
    //     <div className="card">
    //         <Title/>
    //         <div className="card-body">
    //             <table id="example1" className="table table-bordered table-striped">
    //                 <thead>
    //                 <tr>
    //                     <th>ID</th>
    //                     <th>Name</th>
    //                     <th>Last name</th>
    //                     <th>Phone</th>
    //                     <th>Email</th>
    //                     <th>Actions</th>
    //                 </tr>
    //                 </thead>
    //                 <tbody>
    //                 <UserRow/>
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // )
    return (
        <div className="card">
            <Title/>
            <div className="card-body">
                <DataTable
                    className='table table-bordered table-striped'
                    columns={columns}
                    data={data}
                    pagination={true}
                    noHeader={true}
                />
            </div>
        </div>

    )

}

export default UserList;
