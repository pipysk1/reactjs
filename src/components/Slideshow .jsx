import { useState, useEffect } from "react";

const Slideshow = () => {
    const images = [
        "https://photo-zmp3.zmdcdn.me/banner/b/1/b/a/b1ba613ee0949475b7471b30baf21d12.jpg", // Image 1 URL
        "https://photo-zmp3.zmdcdn.me/banner/b/1/b/a/b1ba613ee0949475b7471b30baf21d12.jpg", // Image 2 URL
        "https://photo-zmp3.zmdcdn.me/banner/b/1/b/a/b1ba613ee0949475b7471b30baf21d12.jpg", // Image 3 URL
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically change images every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [images.length]);

    return (
        <div className="relative w-full h-auto overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Display images in a responsive manner */}
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full md:w-[32%] h-[200px] md:h-auto object-cover rounded-[1.25rem] m-2"
                />
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full md:w-[32%] h-[200px] md:h-auto object-cover rounded-[1.25rem] m-2"
                />
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full md:w-[32%] h-[200px] md:h-auto object-cover rounded-[1.25rem] m-2"
                />
            </div>

            {/* Left arrow button */}
            <button
                onClick={() =>
                    setCurrentImageIndex(
                        currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
                    )
                }
                className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                <i className="fa fa-chevron-left"></i>
            </button>

            {/* Right arrow button */}
            <button
                onClick={() =>
                    setCurrentImageIndex(
                        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
                    )
                }
                className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Slideshow;
