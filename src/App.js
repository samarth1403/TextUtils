import React , { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {

  const [mode , setMode] = useState('light');
  const [modeBtn , setModeBtn] = useState('dark')
  const [modeBtnText, setModeBtnText] = useState('Enable Dark')

  const handleChangeMode = () => {
       if(mode==='light'){
         setMode('dark')
         setModeBtn('light')
         setModeBtnText('Enable Light')
         document.body.style.backgroundColor = '#042743'
       }
       else{
        setMode('light')
        setModeBtn('dark')
        setModeBtnText('Enable Dark')
        document.body.style.backgroundColor = 'white'
       }
  }
 
  return (
    <>
     <Navbar title="TextUtils" homeTitle="Home" aboutTitle="About" mode={mode} handleChangeMode = {handleChangeMode} modeBtn={modeBtn} modeBtnText={modeBtnText}/>
     <div className='container'>
       <TextForm heading = "Enter Text To Analyze" mode={mode} />
     </div>
     {/* <About/> */}
    </>
  );
}

export default App;
