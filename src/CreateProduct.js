import axios from 'axios';
import { Field, Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

function CreateProduct(props) {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [isLoading,setLoading]=useState(false) 
    let history = useHistory();
    // let handleSubmit= async (e)=>{
    //     e.preventDefault()
    //     try {
    //         setLoading(true)
    //         await axios.post("https://60efffc3f587af00179d3c2d.mockapi.io/products",{productName,price})
    //         setLoading(false)
    //         console.log({productName,price})
    //         history.push("/products")
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false)
    //     }
    // }
    const formik = useFormik({
        initialValues:{
            productName : "",
            price :""
        },
        validate:(values)=>{
            const errors={};
            if(!values.productName || !values.productName.trim()){
                errors.productName="Required"
            }
            if(!values.price){
                errors.price="Required"
            }
            return errors;
        },
        onSubmit:async (values)=>{
            try {
                setLoading(true)
                await axios.post("https://60efffc3f587af00179d3c2d.mockapi.io/products",{productName:values.productName,price:values.price})
                setLoading(false)
                console.log(values.productName,values.price)
                history.push("/products")
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        })
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Create Product</h1>        
            </div>
            <div className="container">
           
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col col-md-6">
                            <label>Product Name</label>
                            <input name="productName" type="text" value={formik.values.productName} onChange={formik.handleChange} className="form-control"/>
                            {formik.errors.productName?<span style={{color:"red"}}>*{formik.errors.productName}</span>: null}
                        </div>
                        <div className="col col-md-6">
                            <label>Price</label>
                            <input name="price" type="number" value={formik.values.price} onChange={formik.handleChange} className="form-control"/>
                            {formik.errors.price?<span style={{color:"red"}}>*{formik.errors.price}</span>: null}
                        </div>
                        <div className="col col-md-12">
                            <input type="submit" value="Submit" disabled={formik.errors.productName||formik.errors.price} className="btn btn-primary mt-3" />
                        </div>
                    </div>
                    
                </form>
                {/* <Formik initialValues={{productname:"",price:""}}>
                    <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col col-md-6">
                            <label>Product Name</label>
                            <Field type="text" name="productname" value={productName} onChange={(e)=>{setProductName(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-6">
                            <label>Price</label>
                            <Field type="text" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-12">
                            <input type="submit" value="Submit" className="btn btn-primary mt-3" disabled={isLoading}/>
                        </div>
                    </div>
                    
                </Form>
                </Formik> */}
            </div>
        </div>

    )
}

export default CreateProduct
