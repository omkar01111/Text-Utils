import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpCase = () => {
    // console.log("Upeer Case was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to upper case", "sucsses");
  }

  const handleloCase = () => {
    // console.log("Upeer Case was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("convert to lower case", "sucsses");
  }

  const handleTcCase = () => {

    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
  }

  const clearText = () => {
    let newText = " ";
    setText(newText)
  }
  
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  }
  
  const copyText = () => {
  
    navigator.clipboard.writeText(text);
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text, setText] = useState('');


  return (
    <>
      <div className="container " >
        <h2 className="mb-3">{props.heading} </h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(17 33 49)', color: props.mode === 'light' ? 'black' : 'white' }} ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleUpCase} > Create Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1  mx-2" onClick={handleloCase}> Create Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1  mx-2" onClick={handleTcCase}> Title case</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1  mx-2" onClick={handleExtraSpaces}> Remove Spaces</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1  mx-2" onClick={copyText}> Copy</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1  mx-2" onClick={clearText}> Clear</button>

      </div>
      <div className="container my-3">
        <h1>Your test sumary</h1>


        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} Charecters</p>

        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minute words read</p>
        <h3>Preview</h3>
        {text.length > 0 ? text : "Enter someting to preview it here"}
      </div>
    </>
  );
}
