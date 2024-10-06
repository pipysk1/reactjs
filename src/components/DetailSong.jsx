

const DetailSong = () => {
    const url_image = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'

    return (
        <div className="col-span-1">
            <h2 className=" text-cyan-500 font-bold">Now playing</h2>
            <p className="text-2xl text-cyan-100">Sing me to sleep</p>
            <div className="flex items-center justify-center mt-16 ">
                <img src={url_image} alt="" className="w-64 border-black" />
            </div>
            <div className="flex justify-evenly items-center h-24">
                <img src={url_image} alt="" className="w-16 rounded-full" />
                <p className="text-xl text-white">Lại Văn Mãi</p>
            </div>
        </div>
    )
}

export default DetailSong
