import React from 'react'
import { useGetLeadsQuery } from '../../services/leadApi'
import { Link } from 'react-router-dom'

function LeadMaster()
{

    const {isLoading, data} = useGetLeadsQuery()


    return (
        <section className='m-4 p-2'>

            {
                isLoading &&   <span><b>Loading.....</b></span>
            }

            {
                !isLoading && (

                    <table border="" cellPadding='10px' cellSpacing='0' width='75%' style={{margin:'auto'}}>
                    <thead>
                          <tr>
                             <th>ID</th>
                             <th>Name</th>
                             <th>Course</th>
                             <th>Mode</th>
                             <th>Options</th>
                          </tr>
                    </thead>
                    <tbody>
                          {
                             data && data.map((el)=>{
                                 return (
                                     <tr>
                                         <td>{el._id}</td>
                                         <td>{el.name}</td>
                                         <td>{el.intrestedCourse}</td>
                                         <td>{el.mode}</td>
                                         <td><Link to={`/dashboard/leaddata/${el._id}`}><button className='btn btn-primary'>more</button></Link></td>
                                     </tr>
                                 )
                             })
                          }
                    </tbody>
               </table>

                )
            }

              
        </section>
    )
}


export default LeadMaster