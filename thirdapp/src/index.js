import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import App from './App';
//import reportWebVitals from './reportWebVitals'; 
import Layout from './pages/layout';
import Home from './pages/home';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import About from './pages/about';
export default function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}/>
    <Route path="blogs" element={<Blogs/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="about" element={<About/>}/>
    <Route index element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
