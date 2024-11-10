import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home';
import Login from './features/login/Login';
import SignUp from './features/signup/Signup';
import { store } from './app/store';
import {Provider} from 'react-redux'
import Dashboard from './features/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import LeadMaster from './features/dashboard/LeadMaster';
import NewLead from './features/dashboard/NewLead';
import LeadData from './features/dashboard/LeadData';
import AddLeadRemarks from './features/dashboard/AddLeadRemarks';


const myRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/signup',
        element : <SignUp/>
      },
      {
        path : '/dashboard',
        element : <Dashboard/>,
        children : [{
                        path : '/dashboard',
                        element : <LeadMaster/>
                    },
                    {
                        path : '/dashboard/newlead',
                        element : <NewLead></NewLead>
                    },
                    { 
                      path : '/dashboard/leaddata/:id',
                      element : <LeadData></LeadData>

                   },
                  {
                    path : '/dashboard/addleadremarks/:id',
                    element : <AddLeadRemarks/>
                  }]
      }
    ]
  },
 
])






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
            <RouterProvider router={myRouter}>

            </RouterProvider>
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
