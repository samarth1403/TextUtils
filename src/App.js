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
    color : 'black'
  })
  
  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
  }

  const removeButtonColor = () =>{
    document.querySelector('button').classList.remove('btn-primary')
    document.querySelector('button').classList.remove('btn-success')
    document.querySelector('button').classList.remove('btn-warning')
    document.querySelector('button').classList.remove('btn-danger')
    document.querySelector('button').classList.remove('btn-light')
    document.querySelector('button').classList.remove('btn-dark')
  }
 
  // const removeTextareaColor =() =>{
  //   document.querySelector('textarea').classList.remove('bg-primary')
  //   document.querySelector('textarea').classList.remove('bg-success')
  //   document.querySelector('textarea').classList.remove('bg-warning')
  //   document.querySelector('textarea').classList.remove('bg-danger')
  //   document.querySelector('textarea').classList.remove('bg-light')
  //   document.querySelector('textarea').classList.remove('bg-dark')
  // }

  const removeNavbarColor = () =>{
    document.querySelector('nav').classList.remove('navbar-primary','bg-primary')
    document.querySelector('nav').classList.remove('navbar-success','bg-success')
    document.querySelector('nav').classList.remove('navbar-warning','bg-warning')
    document.querySelector('nav').classList.remove('navbar-danger','bg-danger')
    document.querySelector('nav').classList.remove('navbar-light','bg-#4d94ff')
    document.querySelector('nav').classList.remove('navbar-dark','bg-light')
    document.querySelector('nav').classList.remove('navbar-dark','bg-#ff9999')
    document.querySelector('nav').classList.remove('navbar-dark','bg-#99ffbb')
  }
  const handleToggleMode = (cls) =>{
      
      removeBodyClasses();
      removeButtonColor();
      //removeTextareaColor();
      removeNavbarColor();
      document.body.classList.add('bg-'+cls) 
      setBtnColor(cls);
      // setTextBoxColor({
      //   backgroundColor:'primary',
      //   color : 'black'
      //  })
      document.querySelector('nav').classList.add('navbar-dark','bg-dark','text-light','active')
      document.querySelector('textarea').classList.add('bg-'+cls)
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

 
  // const handleRedMode = () =>{
  //         removeButtonColor();
  //         removeBodyClasses();
  //         removeTextareaColor();
  //         removeNavbarColor();
  //        setMode('danger')
  //        setModeBtn('black')
  //        document.body.style.backgroundColor = '#ff3333';
  //        handleAlert("RedMode is enabled","success")
  //        setBtnColor('danger')
  //        setTextBoxColor({
  //         backgroundColor:'#ff9999',
  //         color : 'black',
  //         //fontWeight:'bold'
  //        })
        
  // }

//   const handleGreenMode = () =>{
//         removeButtonColor();
//         removeBodyClasses();
//         removeTextareaColor();
//         setMode('success')
//         setModeBtn('black')
//         document.body.style.backgroundColor = '#66ff66';
//         handleAlert("GreenMode is enabled","success")
//         setBtnColor('success')
//         setTextBoxColor({
//           backgroundColor:'#99ffbb',
//           color : 'black',
//           //fontWeight:'bold'
//          })
         
// }
// const handleChangeMode = () => {
//   if(mode==='light'){
//     removeButtonColor();
//     removeBodyClasses();
//     removeTextareaColor();
//     removeNavbarColor();
//     setMode('dark')
//     setModeBtn('light')
//     setModeBtnText('Enable Light')
//     document.body.style.backgroundColor = '#042743';
//     handleAlert("DarkMode is enabled","success")
//     setBtnColor('dark')
//     setTextBoxColor({
//      backgroundColor:'#4d94ff',
//      color :'white'
//     })
//     //document.title = 'TextUtils - Dark Mode'
    
//   }
//   else{
//    removeButtonColor();
//    removeBodyClasses();
//    removeTextareaColor();  
//    removeNavbarColor();
//    setMode('light')
//    setModeBtn('dark')
//    setModeBtnText('Enable Dark')
//    document.body.style.backgroundColor = 'white';
//    handleAlert("LightMode is Enabled","success")
//    setBtnColor('primary')
//    setTextBoxColor({
//      backgroundColor:'light',
//      color : 'black'
//     })
//    //  document.title = 'TextUtils - Light Mode'
   
//   }
// }
  return (
    <>
    
     <Navbar title="TextUtils" homeTitle="Home" aboutTitle="About" mode={mode} modeBtn={modeBtn} modeBtnText={modeBtnText}
     handleToggleMode={handleToggleMode}/>
         
     <div className='container'>
       <Alert alert={alert} handleAlert={handleAlert}/>
     </div>
     
     <div className='container'>
       <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm heading = "Enter Text To Analyze" mode={mode} btnColor={btnColor} textBoxColor={textBoxColor} alert={alert} handleAlert={handleAlert} />}></Route>
        </Routes>
     </div>

    </>
  );
}

export default App;
