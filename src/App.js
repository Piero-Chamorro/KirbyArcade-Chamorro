import React from 'react';
import 'normalize.css'
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about-us" element={<About/>}/>
        <Route exact path="/our-products" element={<Products/>}/>
        <Route exact path="/contact-us" element={<Contact/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
        <Route exact path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
