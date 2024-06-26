import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BackgroundImg from './bg_image.jpg'

function Student() {

    const [Student, setStudent] = useState([])
    useEffect(() => {
     axios.get('http://localhost:8081/')
     .then(res => setStudent(res.data))
     .catch(err => console.log(err));
    }, [])


    const handleDelete = async (id) =>{
      try{
        await axios.delete('http://localhost:8081/student'+id)
        window.location.reload()
      }catch(err){
        console.log(err);
      }
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' style={{
        backgroundImage: `url(${BackgroundImg})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        
      }}>
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
                             <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link> &nbsp;
                             <button className='btn btn-danger' onClick={e => handleDelete(data.ID)}>Delete</button>
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
