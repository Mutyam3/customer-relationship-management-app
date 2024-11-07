import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar()
{

     const navigate =  useNavigate()

    function handleLogout()
    {
       window.localStorage.clear()
       navigate('/')
    }


    return (
        <>
  <nav class="navbar navbar-expand-lg bg-dark text-light">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#" >Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <Link to='/dashboard/newlead'><button class='btn btn-outline-light bg-success text-light ms-2'> + New Lead</button></Link>
        <button class="btn btn-outline-light bg-light text-dark ms-2" type="submit " onClick = {handleLogout}>Logout</button>
      </form>
    </div>
  </div>
</nav>
  
        </>
    )
}


export default Navbar