import { useFormik } from 'formik'
import React from 'react'


function NewLead()
{

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
            remarks:Array
        },
        onSubmit : (values)=>{
            console.log(values)
        }
    })


    return(
        <section>

            <form onSubmit={leadDetails.handleSubmit}>

          <div>

          </div>
                <input type='text' {...leadDetails.getFieldProps('name')} />

                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />

            </form>

             
        </section>
    )
}


export default NewLead