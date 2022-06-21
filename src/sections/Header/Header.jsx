import React, {useState, useEffect} from 'react';
import { getPages } from '../../utils/utils'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import logo from '../../assets/my-logo.png'

const pages = getPages().reverse()

const Header = () => {
    const [showMenuFlag, setShowMenuFlag] = useState(true)
    const showMenu = (e) => {
        if (e.target.className.animVal === 'hidden mobile-menu__icon') {
            setShowMenuFlag(!showMenuFlag)
        } else {
            setShowMenuFlag(true)
        }
    }
    useEffect(() => {
        function handleResize() {
            if(window.innerWidth <= 758) {
                setShowMenuFlag(false)
            } else {
                setShowMenuFlag(true)
            }
        }
        window.addEventListener('resize', handleResize)
    }, [])
  return (
    <ul className="list-none overflow-auto bg-dark-blue navbar-container">
        <MenuIcon class="hidden mobile-menu__icon" onClick={showMenu}/>
        <li className="inline-block mx-4 my-2 text-pure-white font-light uppercase cursor-pointer border-2 px-2">
            <img className="inline h-12" src={logo} alt="myLogo"/>
        </li>        
        {
            showMenuFlag && pages.map((el,i) => {
                return <li key={i} className="inline-block top-5 m-6 text-pure-white font-light uppercase cursor-pointer float-right">{el}</li>
            })
        }
    </ul>
  );
};
export default Header;
