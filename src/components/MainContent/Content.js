import CreateUser from "./CreateUser"
import { Route } from "react-router-dom"

const Content = (props) => {

    return (

        <div className="card-body">
            Cada vista
            <Route path="/createUser" component={CreateUser} />
        </div>
    )
}

export default Content;
