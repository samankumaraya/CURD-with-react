import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Student() {

    const [Student, setStudent] = useState([])
    useEffect(() => {
     axios.get('http://localhost:8081/')
     .then(res => setStudent(res.data))
     .catch(err => console.log(err));
    }, [])


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       <div className='w-50 bg-white rounded p-3'>
           <Link to="/create" className='btn btn-success'>Add +</Link>
           <table className='table'>
              <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
              </thead>

              <tbody>
                  {
                    Student.map((data, i)=>(
                        <tr key = {i}>
                           <td>{data.Name}</td>
                           <td>{data.Email}</td>
                           <td>
                             <button className='btn btn-primary'>Update</button> &nbsp;
                             <button className='btn btn-danger'>Delete</button>
                           </td>
                        </tr>
                    ) )
                  }
              </tbody>
           </table>
       </div>
    </div>
  )
}

export default Student
