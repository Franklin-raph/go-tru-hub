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
import VerifyAccount from './pages/verifyAccount/VerifyAccount'
import CreatePassword from './pages/create-password/CreatePassword'
import Dashboard from './pages/dashboard/Dashboard'
import CreateUser from './pages/create-user/CreateUser'
import ResetPassword from './pages/reset-password/ResetPassword'
import ValidateToken from './pages/validate-token/ValidateToken'
import ChangePassword from './pages/change-password/ChangePassword'
import Subscribe from './pages/subscribe/Subscribe'
import SubSummary from './pages/sub-summary/SubSummary'

function App() {

  const baseUrl = 'https://api-gotruhub.onrender.com'
  // https://test.yamltech.com/
  const user = localStorage.getItem('user')

    return (
      <HashRouter>
        {
          !user && <Navbar />
        }
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/contact-us' element={<Contact />}/>
            <Route path='/login' element={<Login baseUrl={baseUrl}/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/register-organization' element={<RegisterOrgs baseUrl={baseUrl}/>}  />
            <Route path='/register-personal-biz' element={<RegisterPersonalBiz baseUrl={baseUrl}/>}/>
            <Route path='/regiser-government-biz' element={<RegisterGovernmentBiz baseUrl={baseUrl}/>} />
            <Route path='/verify-account' element={<VerifyAccount baseUrl={baseUrl}/>} />
            <Route path='/verify-token' element={<ValidateToken baseUrl={baseUrl}/>} />
            <Route path='/reset-password' element={<ResetPassword baseUrl={baseUrl}/>} />
            <Route path='/change-password' element={<ChangePassword baseUrl={baseUrl}/>} />
            <Route path='/create-password' element={<CreatePassword baseUrl={baseUrl}/>} />
            <Route path='/dashboard' element={<Dashboard baseUrl={baseUrl}/>} />
            <Route path='/create-user' element={<CreateUser baseUrl={baseUrl}/>} />
            <Route path='/subscribe' element={<Subscribe baseUrl={baseUrl}/>} />
            <Route path='/sub-summary' element={<SubSummary />} />
            <Route path='*' element={<div>404</div>} />
        </Routes>
        {/* <Footer /> */}
      </HashRouter>
  )
}

export default App
