import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    audioFiles: [],
    loading: false,
    currentAudioIndex: 0,  // State for the index of the selected audio
    isPlaying: true, // Start playing by default
};

const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setAudioFiles: (state, action) => {
            state.audioFiles = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setCurrentAudioIndex: (state, action) => {
            state.currentAudioIndex = action.payload;
        },
        playPauseAudio: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        nextAudio: (state) => {
            state.currentAudioIndex = (state.currentAudioIndex + 1) % state.audioFiles.length;
        },
        prevAudio: (state) => {
            state.currentAudioIndex = (state.currentAudioIndex - 1 + state.audioFiles.length) % state.audioFiles.length;
        },
        autoPlayNextAudio: (state) => {
            state.currentAudioIndex = (state.currentAudioIndex + 1) % state.audioFiles.length;
        },
    },
});

export const { setAudioFiles, setLoading, setCurrentAudioIndex, playPauseAudio, nextAudio, prevAudio, autoPlayNextAudio } = audioSlice.actions;
export default audioSlice.reducer;
