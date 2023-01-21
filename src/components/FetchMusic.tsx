import axios from 'axios';
import { useEffect, useState } from 'react';

import './FetchMusic.css';

const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: { key: '484129036', locale: 'en-US' },
    headers: {
        'X-RapidAPI-Key': '064513f2e6mshd0c94a237003569p1f9864jsn1c258c68b967',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    },
};

const FetchMusic = () => {
    const [music, setMusic] = useState<any[]>([]);

    useEffect(() => {
        const pullMusic = async () => {
            axios
                .request(options)
                .then((res) => {
                    setMusic(res.data.tracks);
                    console.log(res.data.tracks);
                })
                .catch((err) => console.error(err));
        };

        pullMusic();
    }, []);

    return (
        <div>
            <h1 className='text-center'>All music</h1>
            <div className='music-list'>
                {music.map((m, index) => (
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img className='w-75' src={m.share.image} />
                        <p>{m.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchMusic;
