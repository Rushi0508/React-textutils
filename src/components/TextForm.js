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
            <div class="form-group my-3">
                <h3>{props.heading}</h3>
                <textarea class="form-control" value={text} placeholder="Enter text here..." onChange={handleChange} rows="6" ></textarea>
            </div>
            <button className="btn btn-sm btn-primary" onClick={upperCase}> Convert to UpperCase </button>
            <button className="btn btn-sm btn-dark mx-1" onClick={lowerCase}> Convert to LowerCase </button>
        </div>
        <div className='container my-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{Math.ceil(0.008 * text.split(" ").length)} Minute Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
