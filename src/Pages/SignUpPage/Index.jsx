import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../Config/axios'
import { toast } from 'react-toastify';

const Index = () => {
  const [accountName, setAccountName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      const response = await api.post(`Account/SignUp`, {
        accountName,
        password,
        emailAddress : signUpEmail,
      });
  
      console.log(response);
  
      if (response.status === 200) {
        toast.success(response.data.message);
        navigate('/login'); // Bật lại nếu muốn chuyển hướng
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Sign up failed");
    }
  };
  


  return (
    <div className='bg-[#686279] min-h-screen flex justify-center items-center inset-0 fixed'>
      <div className='bg-[#2C2638] h-[80%] w-[60%] text-white flex rounded-lg p-4'>

        <div className='w-1/2 flex justify-center items-center'>
          <img
            src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/9280f0218856047.67a8a2d943805.jpg'
            className='object-cover w-full h-full rounded-lg'
            alt="Visual"
          />
        </div>

        <div className='w-1/2 flex flex-col justify-center p-6'>
          <h2 className='text-3xl font-bold text-center mb-2'>Create an account</h2>
          <p className='text-center text-sm mb-6'>
            Already have an account? <Link to='/login' className='text-blue-400 underline'>Log in</Link>
          </p>

          <form className='flex flex-col gap-4' onSubmit={handleSignUp}>
            <div className='flex gap-4 '>
              <input
                type='text'
                placeholder='Account Name'
                value={accountName}
                className='flex-1 p-2 rounded bg-[#3D3C46] text-white placeholder-gray-400 w-[95%]'
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>
            <input
              type='email'
              placeholder='Email'
              value={signUpEmail}
              className='p-2 rounded bg-[#3D3C46] text-white placeholder-gray-400'
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              className='p-2 rounded bg-[#3D3C46] text-white placeholder-gray-400'
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='flex items-center gap-2 text-sm'>
              <input type='checkbox' id='terms' className='accent-white' />
              <label htmlFor='terms'>
                I agree to the <span className='text-blue-400 underline'>Terms & Conditions</span>
              </label>
            </div>

            <button className='py-2 bg-[#9F85FF] rounded text-white font-semibold hover:opacity-90'>
              Create account
            </button>
          </form>

          <div className='flex items-center my-4'>
            <hr className='flex-grow border-gray-600' />
            <span className='mx-2 text-sm text-gray-400'>Or register with</span>
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
          </div>
        </div>

      </div>
    </div>
  )
}

export default Index
