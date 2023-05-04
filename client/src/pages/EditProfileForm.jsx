import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../actions/users'
import './EditProfileForm.css'

const EditProfileForm = ({ currentUser, setSwitch }) => {

  const [name, setName] = useState(currentUser?.result?.name) 
  const [about, setAbout] = useState(currentUser?.result?.about) 
  const [tags, setTags] = useState('') 
  const dispatch = useDispatch()

   const handleSubmit = (e) => {
    e.preventDefault()
    if (tags.length === 0 ) {
        // dispatch(updateProfile(currentUser?.result?._id, { name, about, tags: currentUser?.result?.tags }))
        alert("Update tags field")
    }else{
        dispatch(updateProfile(currentUser?.result?._id, { name, about, tags}))
    }
    setSwitch(false)
   } 

  return (
    <div>
        <h1 className='edit-profile-title'>
            Edit your Profile
        </h1>
        <h2 className="edit-profile-title-2">
            Public Information
        </h2>
        <form className="edit-profile-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <h3>Display Name</h3>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label htmlFor="about">
                <h3>About me</h3>
                <textarea name="" id="about" cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)} ></textarea>
            </label>
            <label htmlFor="tags">
                <h3>Watched tags</h3>
                <p>Add tags seprated by 1 space</p>
                <input type="text" id='tags' onChange={(e) => setTags(e.target.value.split(' '))}/>
            </label><br />
            <input type="submit" value='Save profile' className='user-submit-btn'/>
            <button type='button' className='user-cancel-btn' onClick={() => setSwitch(false)} >Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm