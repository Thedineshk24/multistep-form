import React from 'react'

const Congratulations = ({ username = "Dinesh" }) => {
  return (
    <div>
      <div className="icon">
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