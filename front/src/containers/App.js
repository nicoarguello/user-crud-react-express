import SidebarContainer from "./Sidebar";
import NavbarContainer from "./Navbar";
import ContentWraper from "./Wraper";
import Footer from "../components/Footer";
function App() {
    return (
        <>
            <NavbarContainer/>
            <SidebarContainer/>
            <ContentWraper />
            <Footer />
        </>
    );
}

export default App;
