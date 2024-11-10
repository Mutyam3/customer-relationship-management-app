import { useFormik } from 'formik'
import React from 'react'
import { useAddLeadRemarksByIdMutation } from '../../services/leadApi'
import { useParams } from 'react-router-dom'


function AddLeadRemarks()
{
    var {id} = useParams()

    const [addRemarkFn]   =   useAddLeadRemarksByIdMutation()

    const remarkForm = useFormik({
                          initialValues : {
                               response : '',
                               name : ''
                          },

                          onSubmit : (values)=>{
                            console.log(values)
                            addRemarkFn({remarks : values, id})
                          }
                })
    return (
        <section className='m-3 p-2'>
             <form onSubmit={remarkForm.handleSubmit}>
                 <input type='text'  {...remarkForm.getFieldProps('response')} placeholder='remark'/> <br/><br/>
                 <input type='text'  {...remarkForm.getFieldProps('name')} placeholder='name'/><br/><br/>
                 <button className='btn btn-info'>+ AddRemark</button>
             </form>
        </section>
    )
}


export default AddLeadRemarks