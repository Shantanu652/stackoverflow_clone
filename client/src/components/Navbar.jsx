import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import Search from '../assets/magnifying-glass-solid.svg';
import Avatar from '../components/Avatar';
import './Navbar.css';
import { useEffect} from 'react';
import { setCurrentUser } from '../actions/currentUser';
import logo from '../assets/logo.png'
import decode from 'jwt-decode'

const Navbar = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
var User = useSelector((state) =>(state.currentUserReducer))

const handleLogout = () => {
  dispatch({ type: 'LOGOUT'})
  navigate('/')
  dispatch(setCurrentUser(null))
}

useEffect( () => {
  const token = User?.token
  if(token){
    const deocdedToken = decode(token)
    if(deocdedToken.exp * 1000 < new Date().getTime()){
      handleLogout()
    }
  }
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
},[dispatch])

    return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo'/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
              <input type="text" placeholder='Search...'/>
              <img src={Search} alt="Search" className='search-icon'/>
            </form>
            { User === null ?   
              <Link to='/auth' className='nav-item nav-links'>Log in</Link> :
              <>
              <Link to={`/Users/${User?.result?._id}`}><Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'
              >{User.result.name.charAt(0)}</Avatar></Link>
              <button className='nav-item nav-links' onClick={handleLogout} >Log out</button>
              </>
            }
        </div>
    </nav>
  );
}
export default Navbar;
