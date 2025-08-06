import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import UserLayouts from './components/Layouts/UserLayouts';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<UserLayouts/>}></Route>;
      </Routes>
    </BrowserRouter>
  )
}

export default App
