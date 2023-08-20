import React, { useState } from 'react';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextBox from "./components/TextBox"
import Alert from './components/Alert';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#464646";
      showAlert("Dark mode has benn enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has benn enabled", "success");
    }
  }

  return (
    <Router >
      <>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes >
            <Route exact path='/' element={<TextBox heading="Enter your text for analysis" mode={mode} showAlert={showAlert} />} />
            <Route exact path='/about' element={<About mode={mode} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
