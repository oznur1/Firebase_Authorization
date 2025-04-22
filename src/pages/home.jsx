import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
      <Link to="/register">Kayıt Ol</Link>
      <Link to="/login">Giriş yap</Link>
    </div>
  )
}

export default Home
