import React from 'react'

const CardAudio = () => {
    return (
        <div className='text-white hover:bg-[#2F2739]'>
            <div className='flex items-center'>
                <div className='pl-2 mt-2 mb-2'>
                    <img src="" alt="" className='w-[70px] h-[70px]' />
                </div>
                <div className='pl-5 mt-2 mb-2'>
                    <span className='font-bold text-[20px]'>Phù du</span>
                    <p className='text-[18px] text-yellow-100'>Tác giả</p>
                    <p className='text-[14px] text-yellow-100'>Thời gian</p>
                </div>

            </div>
        </div>
    )
}

export default CardAudio
