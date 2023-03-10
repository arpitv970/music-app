import { Routes, Route, Navigate } from 'react-router-dom';
import AuthUser from '../auth/AuthUser';
import CreateAcc from '../auth/CreateAcc';
import FetchMusic from '../FetchMusic';
import { Music } from '../Interfaces/Music';
import { User } from '../Interfaces/User';
import MusicComponent from '../Pages/MusicComponent';
import MusicPage from '../Pages/MusicComponent';
import Fav from '../Sidebar_links/Fav';
import Playlist from '../Sidebar_links/Playlist';
import Search from '../Sidebar_links/Search';

const Routing: React.FC<Music> = ({
    music,
    setMusic,
    loading,
    setLoading,
    isAuth,
    setIsAuth,
}) => {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={
                        isAuth === true ? (
                            <FetchMusic
                                music={music}
                                setMusic={setMusic}
                                loading={loading}
                                setLoading={setLoading}
                                isAuth={isAuth}
                                setIsAuth={setIsAuth}
                            />
                        ) : (
                            <Navigate replace to='/auth' />
                        )
                    }
                />
                <Route
                    path='/auth'
                    element={<AuthUser isAuth={isAuth} setIsAuth={setIsAuth} />}
                />

                <Route path='/create-user' element={<CreateAcc />} />

                <Route
                    path='/search'
                    element={
                        isAuth === true ? (
                            <Search />
                        ) : (
                            <Navigate replace to='/auth' />
                        )
                    }
                />

                <Route
                    path='/fav'
                    element={
                        isAuth === true ? (
                            <Fav />
                        ) : (
                            <Navigate replace to='/auth' />
                        )
                    }
                />
                <Route
                    path='/playlists'
                    element={
                        isAuth === true ? (
                            <Playlist />
                        ) : (
                            <Navigate replace to='/auth' />
                        )
                    }
                />
                {music.map((m) => (
                    <Route
                        path={`/${m.key}`}
                        element={
                            <MusicComponent
                                title={m.title}
                                subtitle={m.subtitle}
                                bgImg={m.images.background}
                                mainImg={m.images.coverarthq}
                            />
                        }
                    />
                ))}
            </Routes>
        </div>
    );
};

export default Routing;
