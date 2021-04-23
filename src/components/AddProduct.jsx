import axios from "axios"
import { useState } from "react"
import Header from "./Comps/Header"
import Nav from "./Comps/Nav"

const AddProduct = () => {
    let [product, setProduct] = useState({})
    let [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(product);
        const options = {
            url: global.config.host + "/upload",
            method: 'post',
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: product
        }
        try {
            const { data } = await axios(options)
        } catch (err) {
            setError('Somthing went wrong, Try again!')
        }
    }

    const send = async e => {
        e.preventDefault()
        console.log("in send", product);
        const data = new FormData();
        const { name, price, productimage, description } = product
        data.append("name", name);
        data.append('price', price)
        data.append('description', description)
        data.append("productimage", productimage);
        console.log(data);
        const options = {
            url: global.config.host + "/products",
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: data
        }
        const res = await axios(options).catch(err => console.log(err))
        console.log(res);
    };

    if (error) {
        setTimeout(() => {
            setError('')
        }, 3000)
    }

    return (
        <div id="wrapper">
            <Nav active="addProduct" />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <Header />

                    <section className="contact-clean">
                        <form onSubmit={(e) => send(e)}>
                            <h2 className="text-center">Add Product</h2>
                            <p className="text-center text-danger">{error}</p>
                            <div className="form-group"><input value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} className="form-control" type="text" name="name" placeholder="Name" /></div>
                            <div className="form-group"><input value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} className="form-control" type="number" name="price" placeholder="Price" /></div>
                            <div className="form-group"><input onChange={(e) => setProduct({ ...product, productimage: e.target.files[0] })} className="form-control-file is-invalid" type="file" name="image" placeholder="Image" /></div>
                            <div className="form-group"><input value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} className="form-control is-invalid" type="text" name="description" placeholder="Description" /></div>
                            <div className="form-group"><button className="btn btn-primary" type="submit">send</button></div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AddProduct