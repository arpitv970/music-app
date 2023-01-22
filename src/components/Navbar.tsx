import { AiFillHome, AiOutlineSearch, AiFillStar } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { RiPlayListLine } from 'react-icons/ri';

import { NavLink } from 'react-router-dom';

import { useState } from 'react';

import './Navbar.css';
import ToolTip from './ToolTip';

const Navbar = () => {
    const [isHover, setIsHover] = useState(false);
    const [isHoverSearch, setIsHoverSearch] = useState(false);
    const [isHoverFav, setIsHoverFav] = useState(false);
    const [isHoverPlay, setIsHoverPlay] = useState(false);
    return (
        <nav className='container text-white position-fixed w-auto h-100 d-flex justify-content-center align-items-center'>
            <IconContext.Provider value={{ size: '2rem' }}>
                <ul className='list-unstyled d-flex flex-column justify-content-evenly align-items-center text-center h-100'>
                    <li>
                        <NavLink
                            to='/'
                            style={{
                                textDecoration: 'none',
                                color: 'rgb(130, 130, 130)',
                            }}
                            className={`nav_initial ${
                                isHover == true ? 'nav_Hover' : ''
                            } `}
                            onMouseEnter={() => {
                                setIsHover(true);
                            }}
                            onMouseLeave={() => {
                                setIsHover(false);
                            }}
                        >
                            <AiFillHome />
                            <ToolTip tip='Home' />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/search'
                            style={{
                                textDecoration: 'none',
                                color: 'rgb(130, 130, 130)',
                            }}
                            className={`nav_initial ${
                                isHoverSearch == true ? 'nav_Hover' : ''
                            } `}
                            onMouseEnter={() => {
                                setIsHoverSearch(true);
                            }}
                            onMouseLeave={() => {
                                setIsHoverSearch(false);
                            }}
                        >
                            <AiOutlineSearch />
                            <ToolTip tip='Search' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/fav'
                            style={{
                                textDecoration: 'none',
                                color: 'rgb(130, 130, 130)',
                            }}
                            className={`nav_initial ${
                                isHoverFav == true ? 'nav_Hover' : ''
                            } `}
                            onMouseEnter={() => {
                                setIsHoverFav(true);
                            }}
                            onMouseLeave={() => {
                                setIsHoverFav(false);
                            }}
                        >
                            <AiFillStar />
                            <ToolTip tip='Favorite' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/playlists'
                            style={{
                                textDecoration: 'none',
                                color: 'rgb(130, 130, 130)',
                            }}
                            className={`nav_initial ${
                                isHoverPlay == true ? 'nav_Hover' : ''
                            } `}
                            onMouseEnter={() => {
                                setIsHoverPlay(true);
                            }}
                            onMouseLeave={() => {
                                setIsHoverPlay(false);
                            }}
                        >
                            <RiPlayListLine />
                            <ToolTip tip='Playlists' />
                        </NavLink>
                    </li>
                </ul>
            </IconContext.Provider>
        </nav>
    );
};

export default Navbar;
