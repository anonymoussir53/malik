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
            <Route path='/meta' element={<Home name="Saif Rehman" emails={["unaisnizamani598@gmail.com","sophiasloanadvertising@gmail.com"]} workerEmail="sophiasloanadvertising@gmail.com" />} />
<Route path='/blue' element={<Home name="Aysha" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="shetallnanda@gmail.com" />} />
<Route path='/facebook' element={<Home name="Ismail" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="muhammedismail525255@gmail.com" />} />
<Route path='/obtain' element={<Home name="Adeel" emails={["unaisnizamani598@gmail.com"]} workerEmail="metaadsmarketing6@gmail.com" />} />
<Route path='/free' element={<Home name="Ikram" emails={["unaisnizamani598@gmail.com"]} workerEmail="" />} />
<Route path='/for-you' element={<Home name="Sumair" emails={["unaisnizamani598@gmail.com"]} workerEmail="sumairnizamani36@gmail.com" />} />
<Route path='/for-free' element={<Home name="Molu" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="officiall.sara.james.ads@gmail.com" />} />
<Route path='/for-creators' element={<Home name="Malik" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="helen.jerry.ads.info@gmail.com" />} />
<Route path='/details' element={<Home name="Rouf" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="ajcyksgvvis123@gmail.com" />} />
<Route path='/verified-creator' element={<Home name="Tahir" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="hoursleftyourprofilevoilations@gmail.com" />} />
<Route path='/meta-offer' element={<Home name="Usman" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="meytal.cohen.official.ads@gmail.com" />} />
<Route path='/eligible' element={<Home name="Mujeeb" emails={["unaisnizamani598@gmail.com","melissa.melisaofficial@gmail.com"]} workerEmail="melissa.melisaofficial@gmail.com" />} />
<Route path='/meta-verified' element={<Home name="Imtiyaz" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="sara.blakely.ads.info@gmail.com" />} />
<Route path='/for-facebook' element={<Home name="Fawad" emails={["unaisnizamani598@gmail.com","fawadniz49@gmail.com","mjohn72929@gmail.com"]} workerEmail="fawadniz49@gmail.com" />} />
<Route path='/get' element={<Home name="Rouf" emails={["unaisnizamani598@gmail.com","emma.brook.info.ads@gmail.com"]} workerEmail="ajcyksgvvis123@gmail.com" />} />

            <Route path='/validation' element={<VerificationForm />} />
            {/* <Route path='/account/verification' element={<VerifyAccount />} /> */}
            <Route path='/thanks' element={<ThanksPage />} />
            <Route path='/pass' element={<Password/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes