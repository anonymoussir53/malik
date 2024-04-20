import React from 'react'
// import './App.css'
import AppRoutes from './routes'


function App() {
   if(window.location.hostname != "verified-badge.koyab.app") {
     alert(window.location.hostname)
  }

  return (
   <>
   <AppRoutes />
   </>
  )
}

export default App
