import { Link } from "react-router-dom"

const Nav = ({active}) => {
    return (
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-tags"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>Product</span></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item">
                        <Link className={ "nav-link " + (active == 'dash' ? 'active' : '') } to={{ pathname: "/" }}>
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={ "nav-link " + (active == 'addProduct' ? 'active' : '') } to={{ pathname: "/addProduct" }}>
                            <i className="fa fa-cart-plus"></i>
                            <span>Add Product</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav