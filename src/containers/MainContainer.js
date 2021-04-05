import Content from '../components/MainContent/Content';
import {Route} from "react-router-dom"


const MainContainer = (props) => {

    return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Content/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainContainer;
