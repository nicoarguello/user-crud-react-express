import Title from '../components/MainContent/Title'
import Content from '../components/MainContent/Content'

const MainContainer = (props) => {

    return(
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                           <Title />
                           <Content />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainContainer;
