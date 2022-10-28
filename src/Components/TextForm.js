import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [fontWeight , setFontWeight] = useState({ })

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };

  const handleUppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.handleAlert("Converted to UpperCase","success")

  };

  const handleLowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.handleAlert("Converted to LowerCase","success")
  };

  const handleClearText = () => {
    let newtext = "";
    setText(newtext);
    props.handleAlert("Text Cleared","success")
  };

  //Bold is working on second click need to check
  const handleBoldText = () =>{
    
    if(fontWeight.fontWeight === 'normal'){
        setFontWeight({
            fontWeight : 'bold'
        })
        props.handleAlert("Text is Bolded","success")
    }
    else{
        setFontWeight({
            fontWeight : 'normal'
        })
        props.handleAlert("Text is Normaled","success")
    }
  }

  const handleCopyText = () => {
    let texttocopy = document.getElementById("textBox");
    texttocopy.select();
    texttocopy.setSelectionRange(0,9999);
    navigator.clipboard.writeText(texttocopy.value)
    props.handleAlert("Text is Copied to Clipboard","success")
  }

  return (
    <>
    <div className="container my-3" >
      <h4 style={{ color : props.mode === 'dark'?'white':'#042743'}}>{props.heading}</h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="textBox"
          rows="8"
          style = { { fontWeight : fontWeight.fontWeight , ...props.textBoxColor } }
        ></textarea>
      </div>
      <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleUppercase}>
        Convert to UpperCase
      </button>
      <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleLowercase}>
        Convert to LowerCase
      </button>
      <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleClearText}>
        Clear Text
      </button>
      <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleBoldText}>
        Bold
      </button>
      <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleCopyText}>
        Copy Text
      </button>
    </div>
    <div className="container my-4" style={{ color : props.mode === 'dark'?'white':'#042743'}}>
        <h4>Your Text Summary</h4>
        <p>{text.length} Characters & {text.split(" ").length} Words in Your Text</p>
        <p>{0.008 * text.split(" ").length} Minutes are required to read your Text </p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter your Text inside the box to Preview'}</p>
    </div>
    
    </>
  );
}
