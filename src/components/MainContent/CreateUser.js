import React from 'react'

const CreateUser = (props) => {
    return (
        <>
            <form>
                <div className="card-body">
                    <div className="row">
                        <div className="form-group col-6">
                            <label for="exampleInputName">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" placeholder="Enter name" />
                        </div>
                        <div className="form-group col-6">
                            <label for="exampleInputLastName">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputLastName" placeholder="Enter last name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label for="exampleInputEmail">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email" />
                        </div>
                        <div className="form-group col-6">
                            <label for="exampleInputPhone">Phone</label>
                            <input type="text" className="form-control" id="exampleInputPhone" placeholder="Enter phone" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-4">
                            <label for="exampleInputUsername">User Name</label>
                            <input type="text" className="form-control" id="exampleInputUsername" placeholder="Enter User Name" />
                        </div>
                        <div className="form-group col-4">
                            <label for="exampleInputPassword">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group col-4">
                            <label for="exampleInputPasswordConfirmation">Confirm password</label>
                            <input type="password" className="form-control" id="exampleInputPasswordConfirmation" placeholder="Password confirmation" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label>Minimal</label>
                            <select className="form-control select2" style={{ widht: "100%" }} >
                                <option selected="selected">Software Engineer</option>
                                <option>Full Stack Web Developer</option>
                                <option>Scrum Master</option>
                                <option>Project Manager</option>
                                <option>Frontend Developer</option>
                                <option>Backend Developer</option>
                                <option>DevOps Engineer</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-success"><i className="fa fa-save" />Save</button>
                </div>
            </form>
        </>
    )
}

export default CreateUser;

