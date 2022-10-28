import React , {  useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode , setMode] = useState('light');
  const [modeBtn , setModeBtn] = useState('dark')
  const [modeBtnText, setModeBtnText] = useState('Enable Dark')
  const [alert ,setAlert] = useState(null)
  const [btnColor , setBtnColor] = useState('primary')
  const [textBoxColor , setTextBoxColor] = useState({
    backgroundColor:'danger',
    color : 'black',
    fontWeight:'bold'
  })

  const handleChangeMode = () => {
       if(mode==='light'){
         setMode('dark')
         setModeBtn('light')
         setModeBtnText('Enable Light')
         document.body.style.backgroundColor = '#042743';
         handleAlert("DarkMode is enabled","success")
         setTextBoxColor({
          backgroundColor:'#4d94ff',
          color :'white'
         })
         document.title = 'TextUtils - Dark Mode'
       }
       else{
        setMode('light')
        setModeBtn('dark')
        setModeBtnText('Enable Dark')
        document.body.style.backgroundColor = 'white';
        handleAlert("LightMode is Enabled","success")
        setTextBoxColor({
          backgroundColor:'white',
          color : 'black'
         })
         document.title = 'TextUtils - Light Mode'
       }
  }

  const handleAlert = (message , type) =>{
      setAlert({
        message : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
 
  const handleRedMode = () =>{
         setMode('danger')
         setModeBtn('black')
         document.body.style.backgroundColor = '#ff3333';
         handleAlert("RedMode is enabled","success")
         setBtnColor('danger')
         setTextBoxColor({
          backgroundColor:'#ff9999',
          color : 'black',
          //fontWeight:'bold'
         })
  }

  const handleGreenMode = () =>{
        setMode('success')
        setModeBtn('black')
        document.body.style.backgroundColor = '#66ff66';
        handleAlert("GreenMode is enabled","success")
        setBtnColor('success')
        setTextBoxColor({
          backgroundColor:'#99ffbb',
          color : 'black',
          //fontWeight:'bold'
         })
}
  return (
    <>
    
     <Navbar title="TextUtils" homeTitle="Home" aboutTitle="About" mode={mode} handleChangeMode = {handleChangeMode} modeBtn={modeBtn} modeBtnText={modeBtnText}
     handleRedMode={handleRedMode} handleGreenMode={handleGreenMode}/>
         
     <div className='container'>
       <Alert alert={alert} handleAlert={handleAlert}/>
     </div>
  
     <div className='container'>
       <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm heading = "Enter Text To Analyze" mode={mode} btnColor={btnColor} textBoxColor={textBoxColor} alert={alert} handleAlert={handleAlert}/>}></Route>
        </Routes>
     </div>

    </>
  );
}

export default App;
