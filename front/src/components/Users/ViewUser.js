import userImage from './img/user1-128x128.jpg'


const ViewUser = ()=>{


    return (
        <div className="card card-primary card-outline">
            <div className="card-body box-profile">
                <div className="text-center">
                    <img className="profile-user-img img-fluid img-circle"
                         src={userImage}
                         alt="User profile"/>
                </div>

                <h3 className="profile-username text-center">Juan Eduardo Perez Galindo</h3>

                <p className="text-muted text-center">Software Engineer</p>

                <ul className="list-group list-group-unbordered mb-3">
                    <li className="list-group-item">
                        <b>Email: </b> <a className="float-right" href="mailto:juan@gamil.com">juan@gamil.com</a>
                    </li>
                    <li className="list-group-item">
                        <b>Phone: </b> <a href="/" className="float-right">+57-321587987</a>
                    </li>
                    <li className="list-group-item">
                        <b>Created at:</b> <a href="/" className="float-right">21/03/2021</a>
                    </li>
                </ul>

                <a href="edit/1" className="btn btn-primary btn-block"><b>Edit</b></a>
            </div>
        </div>
    )
}

export default ViewUser;
