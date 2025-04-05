import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import api from '../../Config/axios'
import { toast } from 'react-toastify'

const Index = () => {
  const [accountName, setAccountName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post('Login/Login', {
        accountName,
        password,
      })

      if (response.data.isSuccess) {
        navigate('/');
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='bg-[#686279] min-h-screen flex justify-center items-center inset-0 fixed'>
      <div className='bg-[#2C2638] h-[80%] w-[60%] text-white flex rounded-lg p-4'>
        {/* Left side: image */}
        <div className='w-1/2 flex justify-center items-center'>
          <img
            src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/9280f0218856047.67a8a2d943805.jpg'
            className='object-cover w-full h-full rounded-lg'
            alt='Visual'
          />
        </div>

        {/* Right side: Login Form */}
        <div className='w-1/2 flex flex-col justify-center p-6'>
          <h2 className='text-3xl font-bold text-center mb-2'>Login</h2>
          <p className='text-center text-sm mb-6'>
            Don't have an account?{' '}
            <Link to='/signUp' className='text-blue-400 underline'>
              Sign up
            </Link>
          </p>

          <form className='flex flex-col gap-4' onSubmit={handleLogin}>
            <input
              type='text'
              placeholder='Account Name'
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className='p-2 rounded bg-[#3D3C46] text-white placeholder-gray-400'
            />
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-2 rounded bg-[#3D3C46] text-white placeholder-gray-400'
            />
            <button className='py-2 bg-[#9F85FF] rounded text-white font-semibold hover:opacity-90'>
              Login
            </button>
          </form>

          <div className='flex items-center my-4'>
            <hr className='flex-grow border-gray-600' />
            <span className='mx-2 text-sm text-gray-400'>Or Login with</span>
            <hr className='flex-grow border-gray-600' />
          </div>

          <div className='flex gap-4 justify-center'>
            <button className='bg-black text-white px-4 py-2 rounded flex items-center gap-2'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png'
                className='w-5 h-5'
              />
              Google
            </button>
            <button className='bg-black text-white px-4 py-2 rounded flex items-center gap-2'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png'
                className='w-5 h-5 invert'
              />
              Github
            </button>
          </div>~
        </div>
      </div>
    </div>
  )
}

export default Index
