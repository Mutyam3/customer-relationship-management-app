import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeadByIdQuery } from '../../services/leadApi'
import { Link } from 'react-router-dom'


function LeadData()
{

   const {id} =  useParams()
   console.log(id)

   const  {isLoading , data}  = useGetLeadByIdQuery(id)
   
   console.log(data)
    return(
        <section className='m-2 p-2 '> 
                  <div className='m-2 p-2 d-flex justify-content-between'>
                     <h5>Lead details</h5>
                     <Link to={`/dashboard/addleadremarks/${id}`}><button className='btn btn-success'> + Add Remarks</button></Link>
                  </div>    

                {
                    isLoading && <b>Loading...</b>
                }

                {
                    !isLoading && (
                        <section className='d-flex justify-content-around m-4 align-items-center border border-dark'>
                            <div>
                                <p>{data.name}</p>
                            </div>

                            <ul type='none' className='w-50'>
                                {
                                    data.remarks.map((el)=>{
                                        return (
                                           <li >
                                               {typeof(el)=== 'string' && <div className='bg-primary p-2 rounded m-2'>{el}</div>}
                                               {typeof(el)=== 'object' && (
                                                <div className='d-flex border justify-content-between align-items-centerborder-2 p-1 m-2 bg-light rounded'>
                                                    <div className='m-2 p-2 bg-primary rounded'>{el.response}</div>
                                                    <div className='m-2 p-2 bg-primary rounded'>{el.name}</div>
                                                    <div className='m-2 p-2 bg-primary rounded'>{ new Date(el.timestamp).toDateString()} &nbsp;&nbsp;&nbsp; {new Date(el.timestamp).toLocaleTimeString()}</div>
                                                    
                                                </div>
                                               )
                                    }
                                            </li> 
                                        
                                        )
                                    })
                                }
                            </ul>
                        </section>
                    )
                }

        </section>
    )
}

export default LeadData