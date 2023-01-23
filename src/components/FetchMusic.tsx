import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import './FetchMusic.css';
import Header from './Header';

import { Music } from './Interfaces/Music';

const FetchMusic: React.FC<Music> = ({
    music,
    setMusic,
    loading,
    setLoading,
}) => {
    return (
        <div>
        <Header title='Your Favorite Tunes' />

            {loading === true ? (
                <HashLoader
                    cssOverride={{ display: 'block', margin: '25vh auto' }}
                    color='#003a68'
                />
            ) : (
                <div className='music-list'>
                    {music.map((m, index) => (
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/${m.key}`}>
                            <div className='music-list__item d-flex flex-column justify-content-around align-items-center'>
                                <img className='w-75' src={m.share.image} />
                                <p className='w-50 text-center fw-bolder font-monospace'>
                                    {m.title}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FetchMusic;
