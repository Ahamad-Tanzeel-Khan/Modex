import React, {useState} from 'react'

export default function TextBox(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleCapClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(newText);
        props.showAlert("Converted to Capitalize Case", "success");
    }
    const handleTitleClick = () => {
        let newText = text.replace(/\b\w/g, c => c.toUpperCase());
        setText(newText);
        props.showAlert("Converted to Title Case", "success");
    }
    const handleDownloadClick = () => {
        var hidden_a = document.createElement('a');
         
         hidden_a.setAttribute('href', 'data:text/plain;charset=utf-8, '+ encodeURIComponent(text));
         
         hidden_a.setAttribute('download', "text_file");
         document.body.appendChild(hidden_a);
         
         hidden_a.click();
         document.body.removeChild(hidden_a);

         props.showAlert("Downloaded", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("")
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#464646' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} placeholder='Enter the text' id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-3" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-3" disabled={text.length === 0} onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-3" disabled={text.length === 0} onClick={handleCapClick}>Convert to Capitalize Case</button>
        <button className="btn btn-primary mx-2 my-3" disabled={text.length === 0} onClick={handleTitleClick}>Convert to Title Case</button>
        <button className="btn btn-primary mx-2 my-3" disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-3" disabled={text.length === 0} onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2 my-3" disabled={text.length === 0} onClick={handleDownloadClick}>Download</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something above for preview"}</p>
    </div>
    </>
  )
}
