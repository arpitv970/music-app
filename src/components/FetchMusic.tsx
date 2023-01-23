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
            <Header />

            {loading === true ? (
                <HashLoader
                    cssOverride={{ display: 'block', margin: '25vh auto' }}
                    color='#003a68'
                />
            ) : (
                <div className='music-list'>
                    {music.map((m, index) => (
                        <div className='d-flex flex-column justify-content-around align-items-center'>
                            <img className='w-75' src={m.share.image} />
                            <p className='w-50 text-center fw-bolder font-monospace'>{m.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FetchMusic;
