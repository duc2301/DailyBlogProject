import { Link, Navigate, useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo/Logo1.png'
import { useEffect, useState } from 'react'
import api from '../../Config/axios'

const Index = () => {
  const [user, setUser] = useState(null);
  const [userName, setUsername] = useState('');
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate(0);
  }


  const fetchUserData = async () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
      try {
        const response = await api.get(`Account/GetAccountById?id=${user.id}`);
        setUsername(response.data.results.accountName);
      } catch (error) {
        console.error("Error fetching user name: ", error);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className='bg-transparent flex h-[70px] z-15 justify-around border-b p-2 relative'>
        {/* Logo + Menu trái */}
        <div className="flex justify-start items-center z-20 w-[40%]">
          <img src={logo} alt="Logo" className="w-20 h-20 p-2" />
          <p className='text-2xl text-white font-bold'>Daily Blog</p>
          <div className='ml-8 h-[70px] flex items-center '>
            <ul className='flex justify-around text-white '>
              <li className='mx-4'>Blogs</li>
              <li className='mx-4'>Category</li>
              <li className='mx-4'>About</li>
              <li className='mx-4'>Contact</li>
            </ul>
          </div>
        </div>

        {/* Search */}
        <div className='flex items-center'>
          <input
            className='h-[35px] flex rounded-lg px-4 text-white bg-gray-400 bg-opacity-50 placeholder-white placeholder:font-bold active:border-none'
            placeholder='Search'
          />
        </div>

        {/* Tài khoản / Login */}
        <div className='text-white flex items-center relative justify-end w-40'>
          {user ? (
            <>
              <span
                className='text-white text-xl font-bold cursor-pointer'
                onClick={toggleDropdown}
              >
                {userName}
              </span>

              {/* Dropdown menu */}
              {toggleMenu && (
                <div className='absolute top-full left-0 mt w-fit bg-white text-black rounded shadow-lg z-50 '>
                  <Link to="/profile" className='block px-4 py-2 hover:bg-gray-100'>Profile</Link>
                  <button onClick={handleLogout} className='w-full text-left px-4 py-2 hover:bg-gray-100'>Logout</button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to='/login' className='mr-4'>
                Login
              </Link>
              <Link to='/signUp' className='bg-white rounded-lg py-2 px-4 text-black' >Sign up</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
