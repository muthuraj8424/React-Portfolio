import React from 'react'
import notfound from "../assets/notfound.gif"
function Error() {
  return (
    <div className='error-page'>  <img src={notfound} alt="notfound" style={{width:"100%",height:"600px",backgroundPosition:"cover"}} /></div>
  )
}

export default Error