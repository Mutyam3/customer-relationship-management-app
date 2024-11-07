import React from 'react'
import { useGetLeadsQuery } from '../../services/leadApi'

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

                    <table border="" cellPadding='10px' cellSpacing='0' width='100%'>
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

                )
            }

              
        </section>
    )
}


export default LeadMaster