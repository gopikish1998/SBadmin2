import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import UserContext from './userContext';

function EditUser(props) {
    const [name, setUserName] = useState("");
    const [position, setPosition] = useState("");
    const [office, setOffice] = useState("");
    const [age, setAge] = useState("");
    const [startDate, setStartDate] = useState("");
    const [salary, setSalary] = useState("");
    const [isLoading,setLoading]= useState(false)
   
    let history = useHistory();

    useEffect(async () => {
        try {
            let userData= await axios.get(`https://60efffc3f587af00179d3c2d.mockapi.io/users/${props.match.params.id}`);
            setUserName(userData.data.name)
            setPosition(userData.data.position)
            setOffice(userData.data.office)
            setAge(userData.data.age)
            setStartDate(userData.data.startDate)
            setSalary(userData.data.salary)
        } catch (error) {
            console.log(error)
        }
    }, [])
    let handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            await axios.put(`https://60efffc3f587af00179d3c2d.mockapi.io/users/${props.match.params.id}`,{name,position,office,age,startDate,salary})
            setLoading(false)
            history.push("/users")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    // useEffect(() => {
    //     let userData=userContext.userList[props.match.params.id - 1];
    //     console.log(userData)
    //     setUserName(userData.userName)
    //     setPosition(userData.position)
    //     setOffice(userData.office)
    //     setAge(userData.age)
    //     setStartDate(userData.startDate)
    //     setSalary(userData.salary)
    // }, [])

    // let handleSubmit=(e)=>{
    //     e.preventDefault();
    //     let userData = {userName,position,office,age,startDate,salary}
    //     userContext.userList[props.match.params.id - 1]=userData
    //     userContext.setUserList([...userContext.userList])
    //     history.push("/users")
    // }
    return (
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Edit User</h1>        
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col col-md-6">
                            <label>User Name</label>
                            <input type="text" value={name} onChange={(e)=>{setUserName(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-6">
                            <label>Position</label>
                            <input type="text" value={position} onChange={(e)=>{setPosition(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-6">
                            <label>Office</label>
                            <input type="text" value={office} onChange={(e)=>{setOffice(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-6">
                            <label>Age</label>
                            <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-6">
                            <label>Start Date</label>
                            <input type="date" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-6">
                            <label>Salary</label>
                            <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col col-md-12">
                            <input type="submit" value="Update" className="btn btn-primary mt-3"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default EditUser
