import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    return (
        <>
        <div className='container'>
            <div className={`form-group my-3 text-${(props.mode==="light"?"dark":"light")}`}>
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} placeholder="Enter text here..." onChange={handleChange} rows="6" ></textarea>
            </div>
            <button className="btn btn-sm btn-primary" onClick={upperCase}> Convert to UpperCase </button>
            <button className="btn btn-sm btn-secondary mx-1" onClick={lowerCase}> Convert to LowerCase </button>
        </div>
        <div className={`container my-3 text-${(props.mode==="light"?"dark":"light")}`}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{Math.ceil(0.008 * text.split(" ").length)} Minute Read</p>
            <h2>Preview</h2>
            <p>{(text.length===0)?"Enter text to preview": text}</p>
        </div>
        </>
    )
}
