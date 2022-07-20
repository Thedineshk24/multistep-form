import React from 'react'
import "../styles/message.css";

const Congratulations = ({ username = "Dinesh" }) => {
  return (
    <div className='msg'>
      <div>
        <center style={{marginTop : "20px"}}>
          <span style={{backgroundColor: "#654DE4", borderRadius :"50%", padding : "10px"}}>✓</span>
        </center>
      </div>
      <center>
        <h1>Congratulations, {username}!</h1>
        <p>You have completed onboarding, you can start using the Cutshort!</p>
      </center>
    </div>
  )
}

export default Congratulations