import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');//where dark mode is unable or not

  const [alert, setAlert] = useState(null);//

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#030025';
      document.body.style.color = 'white';
      showAlert("Dark mode is Activatted", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is Activatted", "success");
    }

  }
  return (
    <>
      <Router>
        <Navbar title="textUtil" aboutUS="About Us" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtil=Word Couter,Charcter Counter,Remove Extra Spaces" mode={mode} />

            </Route>
          </Switch>


        </div>
      </Router>
    </>
  );
}

export default App;
