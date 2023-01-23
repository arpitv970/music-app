import Header from '../Header';
import './MusicComponent.css';
import { MusicPage } from '../Interfaces/MusicPage';
import { BsSpotify } from 'react-icons/bs';
import { SiItunes, SiDeezer } from 'react-icons/si';
import { IconContext } from 'react-icons';

const MusicComponent: React.FC<MusicPage> = ({
    title,
    subtitle,
    bgImg,
    mainImg,
}) => {
    return (
        <div className='music-component'>
            <Header title={title} />
            <img className='music-component__img' src={mainImg} />
            <h2 className='music-component__subtitle'>{subtitle}</h2>
            <section className='music-component__hubs'>
                <h3 className='text-center'>Listen at</h3>
                <section className='music-component__provider'>
                    <IconContext.Provider value={{size: '2rem'}}>
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
                    </IconContext.Provider>
                </section>
            </section>
        </div>
    );
};

export default MusicComponent;
