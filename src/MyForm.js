import { useFormik, validateYupSchema } from 'formik'
import React from 'react'

function MyForm() {
    const formik = useFormik({
        initialValues:{
            username : "",
            age :""
        },
        validate:(values)=>{
            const errors={};
            if(!values.username){
                errors.username="Required"
            }
            if(!values.age){
                errors.age="Required"
            }
            return errors;
        },
        onSubmit:(values)=>{
            console.log(values)
        }
        })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>Name</label>
                <input name="username" value={formik.values.username} onChange={formik.handleChange}/>
                {formik.errors.username?<span style={{color:"red"}}>*{formik.errors.username}</span>: null}
                <br/>
                <label>Age</label>
                <input name="age" value={formik.values.age} onChange={formik.handleChange}/>
                {formik.errors.age?<span style={{color:"red"}}>*{formik.errors.age}</span>: null}
                <br/>
                <button type="submit" disabled={formik.errors.username||formik.errors.age}>Submit</button>
            </form>
        </div>
    )
}

export default MyForm
