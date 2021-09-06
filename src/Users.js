import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from './userContext';
import { useContext } from 'react';

function Users() {
    const userContext = useContext(UserContext)

    let handleDelete=(index)=>{
        let confirm = window.confirm("Do you want to delete?")
        if(confirm){
            userContext.userList.splice(index-1,1);
            userContext.setUserList([...userContext.userList])
        }
    }
    // let userData=[{
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
            <h1 class="h3 mb-2 text-gray-800">Users</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                            <Link to="/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                        
            <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                        userContext.userList.map((obj,index)=>{
                                            return(
                                            <tr>
                                            <td>{index+1}</td>
                                            <td>{obj.userName}</td>
                                            <td>{obj.position}</td>
                                            <td>{obj.office}</td>
                                            <td>{obj.age}</td>
                                            <td>{obj.startDate}</td>
                                            <td>{obj.salary}</td>
                                            <td><Link to={`/users/edit/${index+1}`} className="btn btn-sm btn-primary">EDIT</Link>
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

export default Users
