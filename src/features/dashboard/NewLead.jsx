import { useFormik } from 'formik'
import React from 'react'
import { useAddLeadMutation } from '../../services/leadApi'
import { useNavigate } from 'react-router-dom'


function NewLead()
{

   const [addLeadFn] = useAddLeadMutation()
   const navigate =useNavigate()

    const leadDetails = useFormik({


        initialValues : {

            name:String,
            experience:String,
            intrestedCourse:String,
            mode:String,
            academics:String,
            mobile:Number,
            email:String,
            address:String,
            referredBy:String,
            remarks:String
        },
        onSubmit : (values)=>{
            console.log(values)
            addLeadFn(values).then((res)=>{
                console.log('add Lead success')
                navigate('/dashboard')
            })

        }
    })


    return(
        <section className='m-auto p-2 w-50 '>

            <form onSubmit={leadDetails.handleSubmit}>

            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('name')} placeholder='enter your fullName'/>
                   <label for="floatingInput">Full Name</label>
            </div>

            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('experience')} placeholder='enter your experience'/>
                   <label for="floatingInput">Experience</label>
            </div>

            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('intrestedCourse')} placeholder='enter your intrestedCourse'/>
                   <label for="floatingInput">Intrested Course</label>
            </div>


            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('mode')} placeholder='enter your mode'/>
                   <label for="floatingInput">Mode</label>
            </div>

            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('academics')} placeholder='enter your academics'/>
                   <label for="floatingInput">Academics</label>
            </div>

            <div class="form-floating mb-3">
                   <input type="number" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('mobile')} placeholder='enter your mobile'/>
                   <label for="floatingInput">Mobile</label>
            </div>

            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('email')} placeholder='enter your email'/>
                   <label for="floatingInput">Email</label>
            </div>

            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('address')} placeholder='enter your address'/>
                   <label for="floatingInput">Address</label>
            </div>

            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('referredBy')} placeholder='enter your referredBy'/>
                   <label for="floatingInput">ReferredBy</label>
            </div>

            <div class="form-floating mb-3">
                   <input type="text" class="form-control" id="floatingInput" {...leadDetails.getFieldProps('remarks')} placeholder='enter your remarks'/>
                   <label for="floatingInput">Remarks</label>
            </div>


                <button  type='submit'>Submit</button>


             

            </form>

             
        </section>
    )
}


export default NewLead