import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout,} from '../firebase'
import { logout as logoutHandle } from '../redux/Slice/authSlice'
import { useNavigate } from 'react-router-dom'
import UpdateProfile from '../components/UpdateProfile'
import { handleEmailVerification } from '../firebase'



const Home = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const handleLogout= async () => {
    await logout()
    
    dispatch(logoutHandle())
    navigate("/login",{
      replace:true})
  }

 const handleEmailVerification=async()=>{
await emailVerification()
 }


 if (user) {
  return (
    <div className="max-w-xl mx-auto py-5">
      <h1 className='flex gap-x-4 items-center'>
        Oturumun açık ({user.email})

        <button 
          onClick={handleLogout}
          className='h-8 rounded px-4 text-sm text-white bg-indigo-700'>
          Çıkış yap
        </button>

        {!user.emailVerified && (
          <button 
            onClick={handleEmailVerification}
            className='h-8 rounded px-4 text-sm text-white bg-indigo-700'>
            E-posta onayla
          </button>
        )}
      </h1>

      <UpdateProfile />
    </div>
  )
}


  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <Link to="/register" className="text-blue-600">Kayıt Ol</Link>
      <Link to="/login" className="text-blue-600">Giriş yap</Link>
    </div>
  )
}

export default Home

