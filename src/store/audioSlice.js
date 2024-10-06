import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
    name: 'audio',
    initialState: {
        audioFiles: [],
        loading: false,
        currentAudioIndex: 0,
        currentAudioTime: 0,
        isPlaying: false,
    },
    reducers: {
        setAudioFiles(state, action) {
            state.audioFiles = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setCurrentAudioIndex(state, action) {
            state.currentAudioIndex = action.payload;
        },
        setCurrentAudioTime(state, action) {
            state.currentAudioTime = action.payload;
        },
        playPauseAudio(state) {
            state.isPlaying = !state.isPlaying;
        },
        nextAudio(state) {
            state.currentAudioIndex = (state.currentAudioIndex + 1) % state.audioFiles.length;
        },
        prevAudio(state) {
            state.currentAudioIndex = (state.currentAudioIndex - 1 + state.audioFiles.length) % state.audioFiles.length;
        },
    },
});

// Export actions
export const {
    setAudioFiles,
    setLoading,
    setCurrentAudioIndex,
    setCurrentAudioTime,
    playPauseAudio,
    nextAudio,
    prevAudio,
} = audioSlice.actions;

// Export reducer
export default audioSlice.reducer;
