import React from 'react'
import {NavLink} from 'react-router-dom'
import '../components/LeftSidebar.css'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClass='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>Public</p></div>
           <NavLink to='/Questions' className='side-nav-links' activeClass='active' style={{paddingLeft: "10px"}}>
            
             <p style={{paddingLeft: "10px"}}>Questions</p>
           </NavLink>
           <NavLink to='/Tags' className='side-nav-links' activeClass='active' style={{paddingLeft: "40px"}}>
              <p>Tags</p>
           </NavLink>
           <NavLink to='/Users' className='side-nav-links' activeClass='active' style={{paddingLeft: "40px"}}>
              <p>Users</p>
           </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar