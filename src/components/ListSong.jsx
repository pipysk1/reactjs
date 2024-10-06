import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAudioFiles, setLoading, setCurrentAudioIndex, setCurrentAudioTime } from '../store/audioSlice';

const ListSong = () => {
    const dispatch = useDispatch();
    const audioFiles = useSelector((state) => state.audio.audioFiles);
    const loading = useSelector((state) => state.audio.loading);
    const currentAudioIndex = useSelector((state) => state.audio.currentAudioIndex);

    useEffect(() => {
        const fetchAudioFiles = async () => {
            dispatch(setLoading(true));
            try {
                const response = await fetch('https://archive.org/metadata/DeBaTH');
                const data = await response.json();

                const formattedSources = data.files
                    .filter(file => file.format === 'VBR MP3')
                    .map((file, index) => ({
                        url: `https://archive.org/download/DeBaTH/${file.name}`,
                        title: `Tập ${file.name.match(/^\d+/)[0].padStart(3, '0')}`,
                        author: "Unknown",  // Replace with actual author if available
                        index: index + 1  // Track the file number
                    }));

                dispatch(setAudioFiles(formattedSources));
            } catch (error) {
                console.error('Error fetching audio files:', error);
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchAudioFiles();
    }, [dispatch]);

    const handlePlayAudio = (audioIndex) => {
        dispatch(setCurrentAudioIndex(audioIndex));  // Set the selected audio in Redux
        dispatch(setCurrentAudioTime(0)); // Reset time to 0 when a new audio is selected
    };

    if (loading) {
        return <div>Loading audio files...</div>;
    }

    return (
        <div className="col-span-2 bg-slate-800 overflow-hidden overflow-y-auto">
            <table className="table-auto w-full relative">
                <thead className="sticky top-0 h-12 text-white bg-stone-700">
                    <tr>
                        <th className="w-[10%] min-w-[30px]">#</th>
                        <th className="w-[60%] text-left">Title</th>
                        <th className="w-[30%]">Author</th>
                    </tr>
                </thead>
                <tbody className="mt-4 h-full text-white">
                    {audioFiles.map((file) => (
                        <tr
                            key={file.index}
                            className={`hover:bg-gray-700 cursor-pointer ${currentAudioIndex === file.index ? 'bg-gray-600' : ''}`} // Highlight current audio
                        >
                            <td className="text-center">{file.index}</td>
                            <td>
                                <a
                                    onClick={() => handlePlayAudio(file.index)} // Pass only the index
                                    className="text-blue-400 underline cursor-pointer"
                                >
                                    {file.title}
                                </a>
                            </td>
                            <td className="text-center">{file.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListSong;
