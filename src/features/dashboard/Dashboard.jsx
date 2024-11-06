import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetLeadsQuery } from '../../services/leadApi'

function Dashboard(){

    const navigate =  useNavigate()

    const {isLoading, data} = useGetLeadsQuery()

    console.log(data)

    function handleLogout()
    {
       window.localStorage.clear()
       navigate('/')
    }
    return(
        <section>
              <h1>Dashboard</h1>



              <button onClick = {handleLogout}>Logout</button><br/><br/>


              <table border="" cellPadding='10px' cellSpacing='0'>
                   <thead>
                         <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>MobileNumber</th>
                            <th>Address</th>
                            <th>Course</th>
                            <th>Mode</th>
                         </tr>
                   </thead>
                   <tbody>
                         {
                            data && data.map((el)=>{
                                return (
                                    <tr>
                                        <td>{el._id}</td>
                                        <td>{el.name}</td>
                                        <td>{el.mobile}</td>
                                        <td>{el.address}</td>
                                        <td>{el.intrestedCourse}</td>
                                        <td>{el.mode}</td>
                                    </tr>
                                )
                            })
                         }
                   </tbody>
              </table>
        </section>
    )
}

export default Dashboard