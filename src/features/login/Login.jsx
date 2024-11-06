import React from "react";
import {useFormik} from'formik' 
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/leadApi";

function Login()
{

        const [loginFn] = useLoginMutation()
        const navigate = useNavigate()

         var loginDetails =  useFormik({
            initialValues : {

                username : '',
                password : ''

            },
            onSubmit : (values)=>{
                console.log(values)

                  loginFn(values).then((res)=>{
                    window.localStorage.setItem('token',res.data.token)
                    console.log(res.data)
                    if(res.data.msg==='loginsuccess')
                    {
                        navigate('/dashboard')
                    }
                     
                  })
                  
            }
         })


    return (
        <section>

        <form onSubmit={loginDetails.handleSubmit}>

            <input type='text' placeholder="Enter your userName" {...loginDetails.getFieldProps('username')}/><br/><br/>
            <input type='text' placeholder="Enter your password" {...loginDetails.getFieldProps('password')}/><br/><br/>
            <button type="submit">Login </button>

        </form><br/><br/>

          <Link to='/signUp'> SignUp </Link>
        </section>
    )
}


export default Login