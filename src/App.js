import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Usered from './pages/Usered'
import {AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <>
    <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/usereducer' element={<Usered />} />
          

          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
       
        </Routes>
        </AuthContextProvider>

        


   
    </>
  );
}

export default App;