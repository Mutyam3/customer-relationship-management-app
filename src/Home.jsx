import React from 'react'
import Login from './features/login/Login'
import { useNavigate } from 'react-router-dom'


function Home()
{

    const navigate = useNavigate()

    React.useEffect(()=>{
        if(window.localStorage.getItem('token')){  // token unte dashboard ki velthadi ade ledu anuko login page ki velthadi eppudu anni applications lo idhe udadu konni vere page ki direct chestam 
            navigate('/dashboard')
        }
        else{

            navigate('/login')

        }
    },[])


    return (
        <section>
              

           <h1>Home Page</h1>


        </section>
    )
}

export default Home

