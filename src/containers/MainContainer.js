import Title from '../components/MainContent/Title'
import Content from '../components/MainContent/Content'
import CreateUser from "../components/MainContent/CreateUser"
import { Route } from "react-router-dom"

const MainContainer = (props) => {

    return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <Title />
                            <Content />
                            <Route path="/createUser" component={CreateUser} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainContainer;
