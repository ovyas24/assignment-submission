import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Login = () => {

    let [username, setUser] = useState("")
    let [password, setPassword] = useState("")
    let err = null

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(username, password);
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/login", { username, password })
            const { message, token } = data
            console.log(message);
            if (token) {
                localStorage.setItem("user", username)
                localStorage.setItem("token", token)
                window.location = "/"
            } else {
                err = message
            }
        } catch (error) {
            err = "Password or Email might be wrong !"
        }

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-6 col-xl-6">
                    <div className="card shadow-lg o-hidden border-0 my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h4 className="text-dark mb-4">Login</h4>
                                            {err}
                                        </div>
                                        <form className="user" onSubmit={handleLogin}>
                                            <div className="mb-3"><input className="form-control form-control-user" onChange={(e) => setUser(e.target.value)} value={username} type="text" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Username..." name="username" /></div>
                                            <div className="mb-3"><input className="form-control form-control-user" onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
                                            <div className="mb-3">
                                                <div className="custom-control custom-checkbox small"></div>
                                            </div><button className="btn btn-primary d-block btn-user w-100" type="submit">Login</button>
                                            <hr />
                                        </form>
                                        <div className="text-center"><Link to="/register"  className="small" >Create an Account!</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login