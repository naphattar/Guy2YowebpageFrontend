import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Page/Homepage/Homepage';
import Aboutpage from './Page/About/Aboutpage';
import Popguypage from './Page/Popguy/Popguypage';
import RegisterPage from './Page/Register/Registerpage';
import LoginPage from './Page/Login/Loginpage';
import Dashboard from './Page/Dashboard/Dashboard';
function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/popguy" element={<Popguypage/>}></Route>
        <Route exact path="/about" element={<Aboutpage/>}></Route>  
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/register" element={<RegisterPage/>}></Route> 
        <Route exact path="dashboard" element={<Dashboard/>}></Route>   
      </Routes>
    </div>
  );
}

export default App;