import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

function CreateProduct(props) {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [isLoading,setLoading]=useState(false) 
    let history = useHistory();
    let handleSubmit= async (e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post("https://60efffc3f587af00179d3c2d.mockapi.io/products",{productName,price})
            setLoading(false)
            console.log({productName,price})
            history.push("/products")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Create Product</h1>        
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
                            <input type="submit" value="Submit" className="btn btn-primary mt-3" disabled={isLoading}/>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>

    )
}

export default CreateProduct
