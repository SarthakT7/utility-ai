import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Email from './components/email-proofread/Email';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
