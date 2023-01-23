import axios from 'axios';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Routing from './components/Routes/Routing';

const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: { key: '484129036', locale: 'en-US' },
    headers: {
        'X-RapidAPI-Key': '9f9c71c4aemsh5e77d18ed69fabep1f2169jsn3f0d8839bfac',
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
        <div className='App'>
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
