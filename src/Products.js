import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from './productContext';


function Products() {
    const productContext = useContext(ProductContext)
    console.log(productContext.prodList)
    let handleDelete=(index)=>{
        let confirm = window.confirm("Do you want to delete?")
        if(confirm){
            productContext.prodList.splice(index-1,1);
            productContext.setProdList([...productContext.prodList])
        }
    }
    // const [productData, setProductData] = useState([])
    // const [isLoading,setLoading]=useState(true) 
    // useEffect(async() => {
    //     try{
    //         let productData= await axios.get("https://60efffc3f587af00179d3c2d.mockapi.io/products")
    //         // console.log(productData.data);
    //         setProductData([...productData.data])
    //         setLoading(false)
    //     }
    //     catch(error){
    //         console.log(error);
    //         setLoading(false)
    //     }
        
    // }, []);

    // let handleDelete=async (id)=>{
    //     let confirm = window.confirm("Are you sure do you want to delete?")
    //     if(confirm){
    //         try {
    //             await axios.delete(`https://60efffc3f587af00179d3c2d.mockapi.io/products/${id}`)
    //             let rowIndex = productData.findIndex(obj=>obj.id==id)
    //             productData.splice(rowIndex,1);
    //             setProductData([...productData])
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
        
    // }
    
    // let productData=[{
    //     id:1,
    //     name: "Tiger Nixon",
    //     position:"System Architect",
    //     office:"Edinburgh",
    //     age:"40",
    //     startDate:"2011/04/25",
    //     salary:"$320,800"
    // },
    // {
    //     id:2,
    //     name: "Tiger Nixon",
    //     position:"System Architect",
    //     office:"Edinburgh",
    //     age:"40",
    //     startDate:"2011/04/25",
    //     salary:"$320,800"
    // }]
    return (
        <div>
            <h1 class="h3 mb-2 text-gray-800">Products</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                            <Link to="/create-product" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
                        
            <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                {/* isLoading ? <h1>Loading...</h1>:  */}
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>                                          
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                {/* {productData.map((obj)=>{
                                        return(
                                        <tr>
                                        <td>{obj.id}</td>
                                        <td>{obj.productName}</td>
                                        <td>{obj.price}</td>
                                        
                                        <td><Link to={`/products/edit/${obj.id}`} className="btn btn-sm btn-primary">EDIT</Link>
                                        <button className="btn btn-sm btn-danger" onClick={()=> {handleDelete(obj.id)}} >DELETE</button></td>
                                    </tr>)
                                    })} */}
                                    {productContext.prodList.map((obj,index)=>{
                                        return(
                                        <tr>
                                        <td>{index+1}</td>
                                        <td>{obj.productName}</td>
                                        <td>{obj.price}</td>
                                        
                                        <td><Link to={`/products/edit/${index+1}`} className="btn btn-sm btn-primary">EDIT</Link>
                                        <button className="btn btn-sm btn-danger" onClick={()=> {handleDelete(index+1)}} >DELETE</button></td>
                                    </tr>)
                                    })}
                                </tbody>
                            </table>

                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Products
