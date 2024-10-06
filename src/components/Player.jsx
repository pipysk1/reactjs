import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { nextAudio, prevAudio, playPauseAudio } from '../store/audioSlice';

const Player = () => {
    // Get the selected audio file from Redux state
    const currentAudioIndex = useSelector((state) => state.audio.currentAudioIndex);
    const audioFiles = useSelector((state) => state.audio.audioFiles);
    const currentAudio = audioFiles[currentAudioIndex];
    const dispatch = useDispatch();
    const [playbackRate, setPlaybackRate] = useState(1); // Initial playback rate
    const [seekTime, setSeekTime] = useState(0); // Initial seek time
    const [volume, setVolume] = useState(0.8); // Initial volume
    const [playing, setPlaying] = useState(true); // Initial playing state
    const [played, setPlayed] = useState(0); // Initial played state

    useEffect(() => {
        // Retrieve seek time from URL query parameter on page load
        const urlSearchParams = new URLSearchParams(location.search);
        const seekTimeFromUrl = urlSearchParams.get('seekTime');
        if (seekTimeFromUrl) {
            setSeekTime(Number(seekTimeFromUrl));
        }
    }, [location.search]);

    const handlePlaybackRateChange = (event) => {
        setPlaybackRate(event.target.value);
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const handleSeekForward = (seconds) => {
        setSeekTime(seekTime + seconds);
    };

    useEffect(() => {
        // Update the seek time display
        const seekTimeDisplay = document.getElementById('seekTimeDisplay');
        if (seekTimeDisplay) {
            seekTimeDisplay.textContent = `Seek Time: ${seekTime} seconds`;
        }
    }, [seekTime]);

    // Automatically play the next audio when the current one ends
    useEffect(() => {
        const player = document.getElementById('react-player');
        if (player) {
            player.addEventListener('ended', () => {
                dispatch(nextAudio());
            });
        }
    }, [dispatch]);

    return (
        <div className="h-[100%] bg-slate-800 text-white text-center leading-[6rem] text-3xl">
            <div className="relative">
                {currentAudioIndex ? (
                    <>
                        <div className='flex justify-center'>
                            <ReactPlayer
                                className='react-player'
                                url={currentAudioIndex.url}  // Use audio URL from Redux
                                playing={playing}          // Autoplay
                                controls={true}         // Show play/pause controls
                                volume={volume}            // Set default volume dynamically
                                playbackRate={playbackRate}        // Set playback speed dynamically
                                onPlay={() => console.log(`Now Playing: ${currentAudioIndex.title}`)}
                                onPause={() => dispatch(playPauseAudio())}
                                onEnded={() => dispatch(nextAudio())}
                                width="50%"            // Adjust to fit container
                                height="50px"           // Adjust height for audio
                                seek={seekTime}
                            // Set seek time dynamically
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col md:flex-row items-center justify-center">
                                <label htmlFor="speedControl" className="text-cyan-700 mb-1 md:mb-0">Tốc độ:</label>
                                <div className="flex items-center w-full md:w-auto">
                                    <input type="range" id="speedControl" min="0.5" max="5" value={playbackRate} step="0.1" className="w-full md:w-32 mr-2" onChange={handlePlaybackRateChange} />
                                    <span id="speedValue" className="text-cyan-600 w-12 text-right">{playbackRate}x</span>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button id="prevBtn" className="bg-blue-500 hover:bg-blue-600 text-white h-1" onClick={() => dispatch(prevAudio())}>⏪</button>
                                <button id="playPauseBtn" className="bg-green-500 hover:bg-green-600 text-white font-bold " onClick={() => setPlaying(!playing)}>{playing ? '⏸️' : '▶️'}</button>
                                <button id="nextBtn" className="bg-blue-500 hover:bg-blue-600 text-white font-bold h-1 " onClick={() => dispatch(nextAudio())}>⏩</button>
                            </div>
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                                <label htmlFor="volumeControl" className="text-cyan-700 mb-1 md:mb-0">Âm lượng:</label>
                                <div className="flex items-center w-full md:w-auto">
                                    <input type="range" id="volumeControl" min="0" max="1" value={volume} step="0.01" className="w-full md:w-32 mr-2" onChange={handleVolumeChange} />
                                    <span id="volumeValue" className="text-cyan-600 w-12 text-right">{(volume * 100).toFixed(2)}%</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No audio selected</p>
                )}
            </div>
        </div>
    );
};

export default Player;
