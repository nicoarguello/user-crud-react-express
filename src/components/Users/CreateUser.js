import React from 'react'
import Title from '../../components/MainContent/Title';
import Select from 'react-select'


const CreateUser = (props) => {

    const options = [
        {value: 'Software Engineer', label: 'Software Engineer'},
        {value: 'Full Stack Web Developer', label: 'Full Stack Web Developer'},
        {value: 'Scrum Master', label: 'Scrum Master'},
        {value: 'Project Manager', label: 'Project Manager'},
        {value: 'Frontend Developer', label: 'Frontend Developer'},
        {value: 'Backend Developer', label: 'Backend Developer'},
        {value: 'DevOps Engineer', label: 'DevOps Engineer'}
    ]

    return (
        <div className="card">
            <Title/>
            <div className="card-body">
                <form>
                    <div className="card-body">
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputName">Name</label>
                                <input type="text" className="form-control" id="exampleInputName"
                                       placeholder="Enter name"/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputLastName">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputLastName"
                                       placeholder="Enter last name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputEmail">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail"
                                       placeholder="Enter email"/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputPhone">Phone</label>
                                <input type="text" className="form-control" id="exampleInputPhone"
                                       placeholder="Enter phone"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-4">
                                <label htmlFor="exampleInputUsername">User Name</label>
                                <input type="text" className="form-control" id="exampleInputUsername"
                                       placeholder="Enter User Name"/>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="exampleInputPasswordConfirmation">Confirm password</label>
                                <input type="password" className="form-control" id="exampleInputPasswordConfirmation"
                                       placeholder="Password confirmation"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="exampleSelectPosition">Position</label>
                                <Select
                                    options={options}
                                    defaultValue={options[0]}
                                    isClearable={true}
                                    isSearchable={true}
                                    inputId='exampleSelectPosition'
                                    name='position'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-success"><i className="fa fa-save"/>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;

