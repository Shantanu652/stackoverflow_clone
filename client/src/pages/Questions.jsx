import React from 'react'
import '../App.css'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import HomeMainbar from '../components/HomeMainbar'

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <div className='home-main-container'>
           <HomeMainbar/>
        </div>
            <RightSidebar/>
      </div>
    </div>
  )
}

export default Questions