import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// function Mediacard({ profilePic, title, time, body, imgURl}) {

//   return <div>
//     <div className="fa-card">
//       <div className="header">
//         <div className="options"><i className="fa fa-chevron-down"></i></div>
//         <img className="logo" src={profilePic}></img>
//         <div className="name"><a href="#">{title}</a></div>
//         <div className="time"><a href="#">{time}</a>· <i className="fa fa-globe"></i></div>
//       </div>
//       <div className="content">
//         <p>{body}<a href="http://placehold.it/300">http://placehold.it/300</a>See More</p>
//       </div>
//       <div className="refence">
//         <img className="reference_thumb" src={imgURl}></img>
//       </div>
//     </div>
//   </div>
// }

// ReactDOM.render(
//   <>
//     <Mediacard profilePic="https://lh3.googleusercontent.com/VrIblHcs25Xc5k44CIAYf7_ISfZO5q2-AbV2emnPA9gmZVrU7Y472mIC3LE2PMDDsLvr" title="Sameer" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:" imgURl="https://i.pinimg.com/originals/dc/4b/eb/dc4beb6bd7fac9fbbaff8736c3afad7c.jpg" />,
//     <Mediacard profilePic="https://lh3.googleusercontent.com/VrIblHcs25Xc5k44CIAYf7_ISfZO5q2-AbV2emnPA9gmZVrU7Y472mIC3LE2PMDDsLvr" title="Sameer" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:" imgURl="https://i.pinimg.com/originals/dc/4b/eb/dc4beb6bd7fac9fbbaff8736c3afad7c.jpg" />,
//     <Mediacard profilePic="https://lh3.googleusercontent.com/VrIblHcs25Xc5k44CIAYf7_ISfZO5q2-AbV2emnPA9gmZVrU7Y472mIC3LE2PMDDsLvr" title="Sameer" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:" imgURl="https://i.pinimg.com/originals/dc/4b/eb/dc4beb6bd7fac9fbbaff8736c3afad7c.jpg" />

//   </>  
//     , document.getElementById('root'));

function Room() {
  const [value, setvalue] = useState(true);
  const birthness = value ? "Bright" : "Dark";
  function abc() {
    setvalue((previousValue) => !previousValue)
  }
  return (
    <div className={`room ${birthness}`}>
      <div>this room is {(value === true) ? "Bright" : "Dark"}</div>
      <button onClick={abc}> Flip </button>
    </div>
  )
}


ReactDOM.render(<Room />,
  document.querySelector("#root"))