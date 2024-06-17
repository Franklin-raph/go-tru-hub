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
import Token from './pages/token/Token'
import SendToken from './pages/send-token/SendToken'
import ManageUsers from './pages/manage-users/ManageUsers'
import SingleUser from './pages/single-user/SingleUser'
import ProfileEdit from './pages/profile-edit/ProfileEdit'
import Wallet from './pages/wallet/Wallet'
import BankAccount from './pages/bank-account/BankAccount'
import UpdateBankAccount from './pages/update-bank-account/UpdateBankAccount'
import WalletRestriction from './pages/wallet-restriction/WalletRestriction'
import WithdrawalRequest from './pages/withdrawal-request/WithdrawalRequest'
import TransactionHistory from './pages/transaction-history/TransactionHistory'
import Orders from './pages/orders/Orders'
import SingleOrder from './pages/single-order/SingleOrder'
import Pass from './pages/pass/Pass'
import Location from './pages/location/Location'
import Settings from './pages/settings/Settings'
import Notification from './pages/notification/Notification'
import Calendar from './pages/calendar/Calendar'
import CreateSession from './pages/create-session/CreateSession'
import CreateSemester from './pages/create-semester/CreateSemester'
import Result from './pages/result/Result'

function App() {

  const baseUrl = 'https://test.yamltech.com'
  const user = localStorage.getItem('user')

    return (
      <HashRouter>
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
            <Route path='/sub-summary' element={<SubSummary baseUrl={baseUrl}/>} />
            <Route path='/token' element={<Token baseUrl={baseUrl}/>} />
            <Route path='/manage-users' element={<ManageUsers baseUrl={baseUrl}/>} />
            <Route path='/profile-edit/:id' element={<ProfileEdit baseUrl={baseUrl}/>} />
            <Route path='/send-token/:id' element={<SendToken baseUrl={baseUrl}/>} />
            <Route path='/user/:id' element={<SingleUser baseUrl={baseUrl}/>} />
            <Route path='/wallet' element={<Wallet baseUrl={baseUrl}/>} />
            <Route path='/wallet-restriction' element={<WalletRestriction baseUrl={baseUrl}/>} />
            <Route path='/bank-account' element={<BankAccount baseUrl={baseUrl}/>} />
            <Route path='/update-bank-account' element={<UpdateBankAccount baseUrl={baseUrl}/>} />
            <Route path='/request-withdrawal' element={<WithdrawalRequest baseUrl={baseUrl}/>} />
            <Route path='/transaction-history' element={<TransactionHistory baseUrl={baseUrl}/>} />
            <Route path='/orders' element={<Orders baseUrl={baseUrl}/>} />
            <Route path='/order/:id' element={<SingleOrder baseUrl={baseUrl}/>} />
            <Route path='/pass' element={<Pass baseUrl={baseUrl}/>} />
            <Route path='/location' element={<Location baseUrl={baseUrl}/>} />
            <Route path='/settings' element={<Settings baseUrl={baseUrl}/>} />
            <Route path='/notification' element={<Notification baseUrl={baseUrl}/>} />
            <Route path='/calendar' element={<Calendar baseUrl={baseUrl}/>} />
            <Route path='/result' element={<Result baseUrl={baseUrl}/>} />
            <Route path='/create-session' element={<CreateSession baseUrl={baseUrl}/>} />
            <Route path='/create-semester/:session' element={<CreateSemester baseUrl={baseUrl}/>} />

            <Route path='*' element={<div>404</div>} />
        </Routes>
      </HashRouter>
  )
}

export default App


  // {
  //   "email": "nwaforglory6@gmail.com",
  //     "password":"Password#1234"
  // }