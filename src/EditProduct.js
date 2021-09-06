import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';


function EditProduct(props) {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [isLoading,setLoading]=useState(false) 
    let history= useHistory()
    useEffect(async () => {
        try {
            let product= await axios.get(`https://60efffc3f587af00179d3c2d.mockapi.io/products/${props.match.params.id}`);
            setProductName(product.data.productName)
            setPrice(product.data.price)
        } catch (error) {
            console.log(error)
        }
    }, [])

    let handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            await axios.put(`https://60efffc3f587af00179d3c2d.mockapi.io/products/${props.match.params.id}`,{productName,price})
            setLoading(false)
            history.push("/products")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Edit Product</h1>        
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col col-md-6">
                            <label>Product Name</label>
                            <input type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-6">
                            <label>Price</label>
                            <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-12">
                            <input type="submit" value="Update" className="btn btn-primary mt-3" disabled={isLoading}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditProduct
