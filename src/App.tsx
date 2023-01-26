import axios from 'axios';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Routing from './components/Routes/Routing';

const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: { key: '484129036', locale: 'en-US' },
    headers: {
        'X-RapidAPI-Key': '6e5e8f2ab4msh88a66b64b12a8cbp1fd60bjsn5f10a02730c6',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    },
};

const App = () => {
    const [music, setMusic] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isAuth, setIsAuth] = useState<boolean>(false);

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
                isAuth={isAuth}
                setIsAuth={setIsAuth}
            />
        </div>
    );
};

export default App;
