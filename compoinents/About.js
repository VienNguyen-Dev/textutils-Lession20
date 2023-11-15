import React from 'react'

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color:'white',
  //   backgroundColor: 'black'
  // })

  let myStyle = {
    color: props.mode === "dark" ?"white" : "#042743",
    backgroundColor: props.mode === "dark" ? 'rgb(36 74 104)' : "white",

  }

  // const [btntext, setbtnText] = useState('Enable Dark Mode')

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
     
  //   setMyStyle( {
  //     color:'white',
  //   backgroundColor: 'black'
  //   })
  //   setbtnText("Enable Light Mode")
  //   } else {
  //     setMyStyle( {
  //     color:'black',
  //   backgroundColor: 'white',
  //   border: '1px solid white'
  //   })
  //   setbtnText("Enable Dark Mode")
  //   }
  // }
  
  return (
    <div className="container" style = {{color: props.mode === "dark" ?"white" : "#042743"}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your text</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body"style= {myStyle} >
            Textutils give you a way to analyze your text quickly and efficiently. BE it word count, chatacter count or 
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style= {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong>Free to use</strong> 
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style= {myStyle}>
            Textutils is a freee character counter tool that provides instant chatater cunt & word ccocunt statistics for a given text. TetUtils reports the number of words and charaters. Thus it is suitable for writing tet with word/ harater limit. 
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style= {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser copatible </strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" style= {myStyle} data-bs-parent="#accordionExample">
          <div className="accordion-body">
             This word counter software works in any web brosers suh as Chrome,, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays et.
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container my-3">
      <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
    </div> */}
    
</div>
  )
}
