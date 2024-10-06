import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { nextAudio, prevAudio, playPauseAudio, setCurrentAudioIndex, setCurrentAudioTime } from '../store/audioSlice';

const Player = () => {
    const dispatch = useDispatch();
    const audioFiles = useSelector((state) => state.audio.audioFiles);
    const currentAudioIndex = useSelector((state) => state.audio.currentAudioIndex);
    const currentAudioTime = useSelector((state) => state.audio.currentAudioTime);
    const isPlaying = useSelector((state) => state.audio.isPlaying);
    const currentAudio = audioFiles[currentAudioIndex];
    const [playbackRate, setPlaybackRate] = useState(1);
    const [volume, setVolume] = useState(0.8);

    useEffect(() => {
        const savedIndex = localStorage.getItem('currentAudioIndex');
        const savedTime = localStorage.getItem('currentAudioTime');

        if (savedIndex) {
            const index = parseInt(savedIndex, 10);
            dispatch(setCurrentAudioIndex(index));
        }

        if (savedTime) {
            const time = parseFloat(savedTime);
            dispatch(setCurrentAudioTime(time));
        }
    }, [dispatch]);

    useEffect(() => {
        // When the current audio changes, reset the current time
        if (currentAudio) {
            dispatch(setCurrentAudioTime(0)); // Reset time to 0 on audio change
        }
    }, [currentAudio, dispatch]);

    const handlePlayPause = () => {
        dispatch(playPauseAudio());
    };

    return (
        <div className="h-[100%] bg-slate-800 text-white text-center leading-[6rem] text-3xl">
            <div className="relative">
                {currentAudio ? (
                    <>
                        <div className='flex justify-center'>
                            <ReactPlayer
                                className='react-player'
                                url={currentAudio.url}
                                playing={isPlaying}
                                controls={true}
                                volume={volume}
                                playbackRate={playbackRate}
                                onPlay={() => console.log(`Now Playing: ${currentAudio.title}`)}
                                onPause={() => dispatch(playPauseAudio())}
                                onEnded={() => {
                                    dispatch(nextAudio());
                                    dispatch(setCurrentAudioTime(0)); // Reset time after moving to next audio
                                }}
                                width="50%"
                                height="50px"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col md:flex-row items-center justify-center">
                                <label htmlFor="speedControl" className="text-cyan-700 mb-1 md:mb-0">Tốc độ:</label>
                                <input
                                    type="range"
                                    id="speedControl"
                                    min="0.5"
                                    max="5"
                                    value={playbackRate}
                                    step="0.1"
                                    className="w-full md:w-32 mr-2"
                                    onChange={(e) => setPlaybackRate(e.target.value)}
                                />
                                <span className="text-cyan-600 w-12 text-right">{playbackRate}x</span>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => dispatch(prevAudio())}>⏪</button>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold" onClick={handlePlayPause}>{isPlaying ? '⏸️' : '▶️'}</button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => dispatch(nextAudio())}>⏩</button>
                            </div>
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                                <label htmlFor="volumeControl" className="text-cyan-700 mb-1 md:mb-0">Âm lượng:</label>
                                <input
                                    type="range"
                                    id="volumeControl"
                                    min="0"
                                    max="1"
                                    value={volume}
                                    step="0.01"
                                    className="w-full md:w-32 mr-2"
                                    onChange={(e) => setVolume(e.target.value)}
                                />
                                <span className="text-cyan-600 w-12 text-right">{(volume * 100).toFixed(2)}%</span>
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
