import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <div className="App">

      {/* <h3>Mutyam CRM App</h3> */}
      
      <Outlet/>
             
    </div>
  );
}

export default App;
