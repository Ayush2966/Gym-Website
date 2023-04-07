import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <h1> Contact Us</h1>
      <form>
        <input type='text' placeholder='Full Name' required />
        <input type='email' placeholder='Email' required />
        <textarea placeholder='Write here...' name ='message' required />
        <input type='submit' value='Send' />
      </form>
      
    </div>
  )
}

export default Contact
