import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Comps/Header"
import Nav from "./Comps/Nav"
import Products from "./Comps/Products"

const Admin = () => {
    let [products, setProducts] = useState()
    let [ loading, setloading ] = useState(false)
    useEffect(async () => {
        setloading(true)
        const options = {
            url: global.config.host + "/products",
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            }
        }
        const { data } = await axios(options)
        setProducts(data)
        console.log(products);
        setloading(false)
    }, [])

    return (
        <div id="wrapper">
            <Nav active="dash" />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <Header />
                    <div className="container-fluid">
                        <div className="d-sm-flex justify-content-between align-items-center mb-4">
                            <h3 className="text-dark mb-0">Dashboard</h3>
                        </div>
                        {
                            loading ? products ? <Products productData={products} /> : <h1>No data to show, <Link to="/addProduct">Add Product</Link> </h1> : <h2>Loading...</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Admin