


import React, { useState } from 'react'
import { update } from 'firebase/database'
import { login } from "../firebase"
import { useDispatch, useSelector } from 'react-redux'

const UpdateProfile = () => {
   
    const dispatch =useDispatch()
    const {user}=useSelector(state=>state.auth)
    const [displayName,setDisplayName]=useState(user.displayName)
    const [avatar,setAvatar]=useState("")

    const handleSubmit=async e =>{
  e.preventDefault()
  await update({
    displayName
  })
  dispatch(login(authSlice.currentUser))
    }


  return (
  <form  onSubmit={handleSubmit}
  className='grid gap-y-4 '>
    <h1 className='text-xl font-bold mb-4'>Profili Güncelle</h1>
    <div>
     <label className='block text-sm font-medium text-gray-700'>E-posta</label>
    <div className='mt-1'>
        <input type="email" 
        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
        placeholder='you@example.com'
        value={displayName} onChange={e=>setDisplayName(e.target.value)}
        />
    </div>
    </div>
  <div>
    <button className='inline-flex disabled:opacity-20 cursor-pointer items-center' type='submit'>Güncelle</button>
  </div>

  </form>
  )
}

export default UpdateProfile
