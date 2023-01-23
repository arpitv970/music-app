import { Routes, Route } from 'react-router-dom';
import FetchMusic from '../FetchMusic';
import { Music } from '../Interfaces/Music';
import Fav from '../Sidebar_links/Fav';
import Playlist from '../Sidebar_links/Playlist';
import Search from '../Sidebar_links/Search';

const Routing: React.FC<Music> = ({ music, setMusic, loading, setLoading }) => {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={
                        <FetchMusic
                            music={music}
                            setMusic={setMusic}
                            loading={loading}
                            setLoading={setLoading}
                        />
                    }
                />
                <Route path='/search' element={<Search />} />
                <Route path='/fav' element={<Fav />} />
                <Route path='/playlists' element={<Playlist />} />
            </Routes>
        </div>
    );
};

export default Routing;
