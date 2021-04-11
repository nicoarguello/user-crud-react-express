import ContentHeader from '../components/ContentHeader'
import MainContainer from './MainContainer'

const ContentWraper = (props) => {
    return (
        <div className="content-wrapper">
            <ContentHeader />
            <MainContainer />
        </div>
    )
}

export default ContentWraper;
