export interface Playlist {
    userPlaylist: string[];
}

export interface User {
    userName: string;
    emailId: string;
    password: string;
    favMusic: string[];
    userPlaylists: [Playlist[]];
}
