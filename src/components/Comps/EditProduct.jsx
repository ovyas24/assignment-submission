import axios from "axios"
import { useEffect, useState } from "react"

const EditProduct = ({ id }) => {

    let [product, setProduct] = useState(null)

    useEffect(async () => {
        const { data } = await axios.get(global.config.public +"/product/"+id)
        console.log(data);
        setProduct(data)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(product);
    }

    const send = e => {
        e.preventDefault()
        const data = new FormData();
        const { name, price, productimage, description } = product
        data.append("name", name);
        data.append('price', price)
        data.append("file", productimage);
        data.append('description', description)
    
        axios.post("https://httpbin.org/anything", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
    };

    return (
        <div className="col-lg-12 col-md-12">
            <div className="row">
                <div className="col col-12">
                    <div className="card shadow mb-3">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">Produst Settings</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => send(e)}>
                                <div className="row">
                                    <div className="col col-12">
                                        <div className="mb-3"><label className="form-label"
                                            for="username"><strong>Name</strong><br /></label><input
                                                className="form-control" type="text" id="name"
                                                placeholder="Prodcut Name" value={product ? product.name : null} onChange={(e) => setProduct({ ...product, name: e.target.value  })} name="name" /></div>
                                    </div>
                                    <div className="col col-12">
                                        <div className="mb-3"><label className="form-label"
                                            for="email"><strong>DEscription</strong></label><input
                                                className="form-control" type="text" id="desc"
                                                placeholder="Prodcut Description" value={product ? product.description : null} onChange={(e) => setProduct({ ...product, description: e.target.value  })} name="desc" /></div>
                                    </div>
                                    <div className="col col-4">
                                        <div className="mb-3"><label className="form-label"
                                            for="email"><strong>Price</strong></label><input
                                                className="form-control" type="number" id="price"
                                                placeholder="1999" value={product ? product.price: null} onChange={(e) => setProduct({ ...product, price: e.target.value  })} name="price" /></div>
                                    </div>
                                    <div className="col col-4">
                                        <div className="mb-3 form-group"><label className="form-label"
                                            for="email"><strong>Image</strong></label><input
                                                className=" form-control form-control-file" type="file" id="image"
                                                placeholder="Image" onChange={(e) => setProduct({ ...product, image: e.target.files[0]  })} name="image" /></div>
                                    </div>
                                </div>
                                <div className="mb-3"><button className="btn btn-primary btn-sm"
                                    type="submit">Save Settings</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct