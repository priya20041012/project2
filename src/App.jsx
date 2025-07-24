import {useState} from 'react'
//import reactlogo from './assests/react.svg'
//import vitelogo from '/vite.svg'
//import Login from './components/login';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Profile from './Components/Pages/Profile';
import Review from './Components/Pages/Review';
import Table from './Components/Pages/Table';
import { BrowserRouter as Router, Routes, Route ,useNavigate} from 'react-router-dom';
import Login from './components/login';
import Layout from './Components/Pages/layout';

// import './App.css'

function App() {
  const [count,setCount] =useState(0)

  return (
  <Router>
          <Routes>
          <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Layout><Profile/></Layout>} />         
          <Route path="/review" element={<Review/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/table" element={<Table/>} />

    
      </Routes>
    </Router>
  );
};


export default App