import FetchMusic from './components/FetchMusic';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<FetchMusic />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </div>
    );
};

export default App;
