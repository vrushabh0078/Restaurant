import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import './index.css';
import About from '../src/Components/About/About'
import Contact from '../src/Components/Contact/Contact'
import Error from '../src/Components/Error/Error'



ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);