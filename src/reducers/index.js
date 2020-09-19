import { combineReducers } from 'redux';

// songsReducer creator
const songsReducer = () => {
    return [
        { title: 'Duduke', duration: '4:05' },
        { title: 'Nobody', duration: '3:20' },
        { title: 'Bop Daddy', duration: '2:20' },
        { title: 'Joro', duration: '2:10' }
    ];
};

// selectedSongReducer creator
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});