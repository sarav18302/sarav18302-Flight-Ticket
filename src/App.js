import React from 'react';
import './App.css';
import './index.css';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage'
import {Route, Routes} from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import { AdminProfile } from './pages/AdminProfile';
import { LandingPage } from './pages/LandingPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import Layout from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AddFlight } from './pages/AddFlight';

function App() {
  return (
  <UserContextProvider>
   <Routes>
   
   <Route path="/" element={<Layout/>} >
    <Route index element ={<LandingPage/>} />
   <Route path="/user/register" element={<RegisterPage />} />
   <Route path="/user/login" element={<LoginPage />} />
   <Route path="/admin/info" element={<AdminProfile />} />
   <Route path="/admin/login" element={<AdminLoginPage />} />
   <Route path="/user/home" element={<HomePage />} />
   <Route path="/add-flights" element={<AddFlight />} />

   </Route>
   </Routes>
   </UserContextProvider>
  );
}

export default App;
