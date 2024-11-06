import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignupMutation } from '../../services/leadApi'



function SignUp()
{

     const navigate =  useNavigate()
     const [signupFn] = useSignupMutation()

     const signUpDetails =   useFormik({

            initialValues : {
                username : '',
                password : ''

            },
            onSubmit : (values)=>{
                console.log(values)

                signupFn(values).then((res)=>{
                    console.log(res)
                    navigate('/login')
                })

               

            }
        })
    return(
        <section>

            <form onSubmit={signUpDetails.handleSubmit}>

                <input type='text' {...signUpDetails.getFieldProps('username')}  placeholder='Enter your username'/><br/><br/>
                <input type='text' {...signUpDetails.getFieldProps('password')}  placeholder='Enter your password'/><br/><br/>

                <button type='submit'>SignUp</button>

            </form>

        </section>
    )
}

export default SignUp

