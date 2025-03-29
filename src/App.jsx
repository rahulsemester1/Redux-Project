import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="success" element={<Success/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App