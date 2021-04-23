import { useEffect, useState } from "react";

const Header = () => {

    let [user, setUser] = useState()
    useEffect(() => {
        setUser(localStorage.getItem("user"))
    }, [])

    const Logout = () => {
        console.log("Logging out");
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        window.location = "/"
    }

    return (
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid">
                <ul className="navbar-nav flex-nowrap ml-auto">
                    <li className="nav-item">
                        <a className=" nav-link" href="#">
                            <span className="d-none d-lg-inline mr-2 text-gray-600 small">{user}</span>
                        </a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="#" onClick={Logout}>
                            <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i><span className="d-none d-lg-inline mr-2 text-gray-600 small">Log Out</span>
                             </a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Header