import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=> {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("The text was change to uppercase!","success") 
  }
  const handleOnChange = (event)=> {
    setText(event.target.value)
  }
  const handleClearClick = () => {
    let newText = ''
    setText(newText)
   props.showAlert("The text was cleared!","success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
     props.showAlert("The text was change to lowercase!","success")
  } 
// Credit: A
  const handleCopy = () => {
      navigator.clipboard.writeText(text)
      document.getSelection().removeAllRanges()
       props.showAlert("The text copied from clipboard!","success")
      
  }

  // Credit: Code raha
  const handleExtraSpace = () => {
    let newText = text.split(/ [ ] + /)
    setText(newText.join(" "))
    props.showAlert("The text was extra space!","success")
    
  }

  //Credit: shift
  // const [theme, setTheme] = useState("light")

  // const handleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark")
  //   } else {
  //     setTheme("light")
  //   }
  // }

  const [text, setText] = useState('')
  // text ='new text here' //Wrong way to change the state
  //setText("new text") //Correct way to change the state
  
  return (
    <>
    <div className='container' style={{color: props.mode==="dark" ? "white" : "#042743"}}>
      <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark" ?'#13466e':'white', color: props.mode==='dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Space</button>
           {/* <button className='btn btn-primary mx-1' onClick={handleTheme}>Toggle Theme</button> */}
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words, {text.length} characters</p> {/*USe filter to fix */}
      <p>{ 0.008 *(text.split(" ").filter((element) => {return element.length !== 0}).length) } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text : "Nothing to preview!" }</p>
    </div>
    </>
    
  )
}

