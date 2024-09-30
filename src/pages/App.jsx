import React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from '../contents/AboutUs';
import ContactUs from '../contents/ContactUs';
import Legal from '../contents/Legal';
import TermOfUse from '../contents/TermOfUse';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Articles from './Articles';
import ArticleDetails from './ArticleDetails';
import Profile from './Profile';
import { Bcexplorer, loader as bcloader } from './bcexplorer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/aboutus' element={<AboutUs  />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/termofuse' element={<TermOfUse />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articledetails/:id' element={<ArticleDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/bcexplorer' element={<Bcexplorer />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;