import React, { useContext,useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Doctors from "./components/Doctors"
import Message from "./components/Message"
import AddNewAdmin from "./components/AddNewAdmin"
import AddNewDoctor from "./components/AddNewDoctor"
import Sidebar from './components/Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Context} from "./main"
import axios from "axios"
const App = () => {

  const {isAuthenticated,setIsAuthenticated,setUser}=useContext(Context)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/user/admin/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(res.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };

    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
    <Router>
    <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/doctor/addnew' element={<AddNewDoctor/>}/>
        <Route path='/admin/addnew' element={<AddNewAdmin/>}/>
        <Route path='/messages' element={<Message/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        
      </Routes>
      <ToastContainer position='top-right'/>
    </Router>
    </>
  )
}

export default App
