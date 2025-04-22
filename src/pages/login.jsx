import React from 'react'
import { useState } from 'react'
import { login } from '../firebase'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    const user =await login(email,password)
    console.log(user)
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form 
        className='max-w-xl w-full mx-auto p-6 bg-white rounded-lg shadow-md'
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email" 
            placeholder='E-posta adresi' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      
        <div className="mb-6">
          <input 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password" 
            placeholder='Şifre giriniz' 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />  
        </div>
      
        <button 
          className={`w-full py-2 px-4 rounded-md text-white font-bold ${
            !email || !password ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          type="submit" 
          disabled={!email || !password}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Login;
