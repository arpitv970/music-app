import FetchMusic from './components/FetchMusic';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import Search from './components/Sidebar_links/Search';
import Fav from './components/Sidebar_links/Fav';
import Playlist from './components/Sidebar_links/Playlist';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<FetchMusic />} />
                <Route path='/search' element={<Search />} />
                <Route path='/fav' element={<Fav />} />
                <Route path='/playlists' element={<Playlist />} />
            </Routes>
        </div>
    );
};

export default App;
