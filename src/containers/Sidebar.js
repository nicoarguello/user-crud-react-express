import { NavLink } from "react-router-dom";


const SidebarContainer = (props) => {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index.html" className="brand-link">
                <img src="./dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }} />
                <span className="brand-text font-weight-light">Admin panel</span>
            </a>

            <div className="sidebar mt-3">
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search users"
                            aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <li className="nav-header">Main menú</li>
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName='active'>
                                <i className="nav-icon fas fa-house-user" />
                                <p>
                                    Home
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/createUser" className="nav-link" activeClassName="active">
                                <i className="nav-icon fas fa-user-plus" />
                                <p>
                                    Create new user
                                </p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <hr />
        </aside>
    )
}

export default SidebarContainer;

