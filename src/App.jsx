import { useState } from 'react'
import { createHashRouter, createRoutesFromElements, HashRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Footer from './components/footer/Footer'
import Register from './pages/register/Register'
import RegisterOrgs from './pages/register-orgs/RegisterOrgs'
import RegisterPersonalBiz from './pages/register-personal-biz/RegisterPersonalBiz'
import RegisterGovernmentBiz from './pages/register-goverment-biz/RegisterGovernmentBiz'

function App() {

    
    return (
      <HashRouter>
        <Navbar />
          {/* <div className='w-[85%] mx-auto'> */}
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/contact-us' element={<Contact />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/register-organization' element={<RegisterOrgs />}  />
                <Route path='/register-personal-biz' element={<RegisterPersonalBiz/>}/>
                <Route path='/regiser-government-biz' element={<RegisterGovernmentBiz />} />
                <Route path='*' element={<div>404</div>} />
            </Routes>
          {/* </div> */}
        {/* <Footer /> */}
      </HashRouter>
  )
}

export default App
