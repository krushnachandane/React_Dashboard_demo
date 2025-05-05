import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  
    return (
    <div>
        {/* <h2>Header</h2> */}

        <Link className='btn btn-secondary ms-3' to='/'>HOME</Link>&nbsp;&nbsp;
        <Link style={{marginLeft:"300px"}} className='btn btn-secondary' to='/about'>ABOUT</Link>&nbsp;&nbsp;
        <Link className='btn btn-secondary ms-3' to='/contact'>CONTACT</Link>&nbsp;&nbsp;
        <Link className='btn btn-secondary ms-3' to='/login'>LOGIN</Link>&nbsp;&nbsp;
    </div>
  )
}

export default Header