import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
            <div className='question-details'>
            <QuestionDetails/>
            </div>
            <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestion