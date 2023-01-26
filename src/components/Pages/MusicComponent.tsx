import Header from '../Header';
import './MusicComponent.css';
import { MusicPage } from '../Interfaces/MusicPage';
import { BsSpotify } from 'react-icons/bs';
import { SiItunes, SiDeezer } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RiPlayListLine } from 'react-icons/ri';
import { useState } from 'react';

const MusicComponent: React.FC<MusicPage> = ({
    title,
    subtitle,
    bgImg,
    mainImg,
}) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <IconContext.Provider value={{ size: '2rem' }}>
            <div className='music-component'>
                <Header title={title} />
                <img className='music-component__img' src={mainImg} />
                <section className='music-component__actions'>
                    <span className='music-component__icons'>
                        <span
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            {isHover === true ? (
                                <AiFillStar />
                            ) : (
                                <AiOutlineStar />
                            )}
                        </span>
                        <RiPlayListLine />
                    </span>
                    <h2 className='music-component__subtitle'>{subtitle}</h2>
                </section>
                <section className='music-component__hubs'>
                    <h3 className='text-center'>Listen at</h3>
                    <section className='music-component__provider'>
                        <span>
                            <SiItunes />
                            <p>Itunes</p>
                        </span>
                        <span>
                            <BsSpotify />
                            <p>Spotify</p>
                        </span>
                        <span>
                            <SiDeezer />
                            <p>Deezer</p>
                        </span>
                    </section>
                </section>
            </div>
        </IconContext.Provider>
    );
};

export default MusicComponent;
