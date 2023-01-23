import './Header.css';
import { useState, useEffect } from 'react';

interface Props {
    title: string;
}

const Header = ({ title }: Props) => {
    const [heading, setHeading] = useState('Your Favorite Tunes');

    useEffect(() => {
        setHeading(heading);
        console.log(heading);
    }, []);

    return (
        <div className='header-box'>
            <h1 className='text-center fw-bold'>{title}</h1>
        </div>
    );
};

export default Header;
