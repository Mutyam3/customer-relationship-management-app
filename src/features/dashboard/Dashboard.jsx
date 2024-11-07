import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Navbar from './Navbar'

function Dashboard(){




    return(
        <section>


             <Navbar></Navbar>

                <br/><br/>

                
                <Outlet/>  
              
        </section>
    )
}

export default Dashboard