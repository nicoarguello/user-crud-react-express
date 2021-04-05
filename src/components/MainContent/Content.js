import CreateUser from "../Users/CreateUser"
import UserList from "../Users/UserList"
import EditUser from "../Users/EditUser";
import ViewUser from "../Users/ViewUser";
import { Route } from "react-router-dom"

const Content = (props) => {

    return (
        <div className="card-body">
            <Route exact path='/' component={UserList} />
            <Route exact path="/user/create" component={CreateUser} />
            <Route exact path="/user/edit/:id" component={EditUser} />
            <Route exact path='/user/view/:id' component={ViewUser}/>
        </div>
    )
}

export default Content;
