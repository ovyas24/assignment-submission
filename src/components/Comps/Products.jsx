import { Link } from "react-router-dom";

const Products = ({ productData }) => {
    return productData ? (
        <div className="container-fluid" >
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Product Info</p>
                </div>
                <div className="card-body">
                    <div className="row">
                    </div>
                    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                        <table className="table my-0" id="dataTable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Imgae</th>
                                    <th>Description</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productData.map((product) => {
                                        return (
                                            <tr key={product._id}>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.image}</td>
                                                <td>{product.description}</td>
                                                <td> <Link to={{ pathname: "/product/" + product._id }}>Delete</Link></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Imgae</th>
                                    <th>Description</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing {productData.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    ) : null
}

export default Products