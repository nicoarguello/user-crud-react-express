import React from "react";

import Title from '../../components/MainContent/Title';


const EditUser = () => {

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
                                       placeholder="Enter name"
                                       value="Juan Eduardo"/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputLastName">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputLastName"
                                       placeholder="Enter last name" value="Perez Galindo"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputEmail">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail"
                                       placeholder="Enter email"
                                       value="juan@gamil.com"/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputPhone">Phone</label>
                                <input type="text" className="form-control" id="exampleInputPhone"
                                       placeholder="Enter phone"
                                       value="+57-321587987"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-4">
                                <label htmlFor="exampleInputUsername">User Name</label>
                                <input type="text" className="form-control" id="exampleInputUsername"
                                       placeholder="Enter User Name" value="jperezga"/>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword"
                                       placeholder="Password"
                                       value="123456"/>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="exampleInputPasswordConfirmation">Confirm password</label>
                                <input type="password" className="form-control" id="exampleInputPasswordConfirmation"
                                       placeholder="Password confirmation" value="123456"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="exampleSelectPosition">Minimal</label>
                                <select id="exampleSelectPosition" className="form-control select2"
                                        style={{width: "100%"}}>
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
                        <button type="submit" className="btn btn-success"><i className="fa fa-save"/>&nbsp&nbspSave
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser;
