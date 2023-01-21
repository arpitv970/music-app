import { AiFillHome, AiOutlineSearch, AiFillStar } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { RiPlayListLine } from 'react-icons/ri';

import './Navbar.css';
import ToolTip from './ToolTip';

const Navbar = () => {
    return (
        <nav className='container text-white position-fixed w-auto h-100 d-flex justify-content-center align-items-center'>
            <IconContext.Provider value={{ size: '2rem' }}>
                <ul className='list-unstyled d-flex flex-column justify-content-evenly align-items-center text-center h-75'>
                    <li>
                        <AiFillHome />
                        <ToolTip tip='Home' />
                    </li>
                    <li>
                        <AiOutlineSearch />
                        <ToolTip tip='Search' />
                    </li>
                    <li>
                        <AiFillStar />
                        <ToolTip tip='Favorite' />
                    </li>
                    <li>
                        <RiPlayListLine />
                        <ToolTip tip='Playlists' />
                    </li>
                </ul>
            </IconContext.Provider>
        </nav>
    );
};

export default Navbar;
