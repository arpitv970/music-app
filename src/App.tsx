import axios from 'axios';

import FetchMusic from './components/FetchMusic';
import Navbar from './components/Navbar';

import { useEffect, useState } from 'react';
import Routing from './components/Routes/Routing';
import { Music } from './components/Interfaces/Music';

const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: { key: '484129036', locale: 'en-US' },
    headers: {
        'X-RapidAPI-Key': '064513f2e6mshd0c94a237003569p1f9864jsn1c258c68b967',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    },
};

const App = () => {
    const [music, setMusic] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const pullMusic = async () => {
            await axios
                .request(options)
                .then((res) => {
                    setMusic(res.data.tracks);
                    setLoading(!loading);
                })
                .catch((err) => console.error(err));
        };

        pullMusic();
    }, []);

    return (
        <div>
            <Navbar />
            <Routing
                music={music}
                setMusic={setMusic}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    );
};

export default App;
