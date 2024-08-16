import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Email from './components/email-proofread/Email';
import JsonGenerator from "./components/generate-json/JsonGenerator";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />} />
          <Route path="/generate-json" element={<JsonGenerator />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
