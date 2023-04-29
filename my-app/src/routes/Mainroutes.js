import React from 'react';
import { Route,Routes } from 'react-router';
import Collab from '../components/Collab';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Jobs from '../components/Jobs';
import Mycourses from '../components/Mycourses';
import Login from '../components/Login';
import Footer from '../components/Footer';
import ForgotPassword from '../components/ForgotPassword';
import CN1 from '../components/courseDetail/CN1';
import SE from '../components/courseDetail/SE';
import SOP from '../components/courseDetail/SOP';


const Mainroutes = () => {
  return (
    <div>
      <div >
            <Routes >
            <Route path="/" element={<Login/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="home" element={<Home />} />
            <Route path="collab" element={<Collab/>} />
            <Route path="jobs" element={<Jobs/>} />
            <Route path="mycourses" element={<Mycourses/>} />
            <Route path="forgotpassword" element={<ForgotPassword/>}/>
            <Route path="cn1" element={<CN1/>}/>
            <Route path="se" element={<SE/>}/>
            <Route path="sop" element={<SOP/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default Mainroutes
