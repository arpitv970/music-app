import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import './FetchMusic.css';
import Header from './Header';

import { Music } from './Interfaces/Music';
import MusicCard from './MusicCard';

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
                        <Link
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to={`/${m.key}`}
                        >
                            <MusicCard
                                musicImage={m.share.image}
                                musicTitle={m.title}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FetchMusic;
