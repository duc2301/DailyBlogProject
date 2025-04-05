import { Link } from 'react-router-dom'
import logo from '../../assets/Logo/Logo1.png'

const Index = () => {
  return (
    <>
        <div className='bg-transparent flex h-[70px] z-15 justify-around border-b p-2'>
            <div className=" flex justify-center items-center z-20">
                <img 
                    src={logo}
                    alt="Logo" 
                    className="w-20 h-20 p-2"
                />
                <p className='text-2xl text-white font-bold'>Daily Blog</p>
                <div className='ml-8 h-[70px] flex items-center '>
                    <ul className='flex justify-around text-white '>
                        <li className='mx-4 '> Home Page </li>
                        <li>Blogs </li>
                    </ul>
                </div>
            </div>
            <div className=' flex items-center'>
                <input className='h-[35px] flex rounded-lg px-4 text-white bg-gray-400 bg-opacity-50 placeholder-white placeholder:font-bold active:border-none' placeholder='Search'/>                    
            </div>
            <div className='text-white flex items-center'>
                <Link to='/login'>Login</Link>
                <button className='bg-white rounded-lg py-2 px-4 ml-6 text-black'>Sign up</button>
            </div>            
        </div>
    </>
  )
}

export default Index