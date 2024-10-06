import React from 'react';
import Slideshow from './Slideshow ';
import CardAudio from './CardAudio';

const ContentZingCenter = () => {
    return (
        <div id="animation-carousel" className="relative w-full" data-carousel="static">
            <Slideshow />
            <div className='mt-5 ml-5'>
                <h1 className='text-white text-[20px] font-bold'>Mới phát hành</h1>
                <div className="text-white flex m-5 cursor-pointer">
                    <p className="text-[12px] mr-5 border-solid border-2 border-indigo-100 rounded-lg p-2">Tất cả</p>
                    <p className="text-[12px] mr-5 border-solid border-2 border-indigo-100 rounded-lg p-2">Việt Nam</p>
                    <p className="text-[12px] mr-5 border-solid border-2 border-indigo-100 rounded-lg p-2">Quốc tế</p>
                </div>
                <div className='grid grid-cols-3  '>
                    <CardAudio />
                    <CardAudio />
                    <CardAudio />
                    <CardAudio />
                    <CardAudio />
                    <CardAudio />
                    <CardAudio />
                    <CardAudio />
                    <CardAudio />
                </div>
            </div>
        </div>

    );
};

export default ContentZingCenter;
