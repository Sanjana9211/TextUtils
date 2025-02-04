import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#26292b';
      showAlert('Dark mode has been enabled',"success");
      // document.title='TextUtils - Blue Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is amazing!';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils now!';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled',"success");
      // document.title='TextUtils - Light Mode';

    }
  }

  const toggleMode1=()=>{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode has been enabled',"success");

  }


  const toggleMode2=()=>{
    setMode('dark');
    document.body.style.backgroundColor='#26292b';
    showAlert('Dark mode has been enabled',"success");

  }

  const toggleMode3=()=>{
    setMode('burg');
    document.body.style.backgroundColor='#660033';
    showAlert('Burgandy mode has been enabled',"success");

  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText='About' mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3}/>


    <Alert alert={alert}/>


    <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
