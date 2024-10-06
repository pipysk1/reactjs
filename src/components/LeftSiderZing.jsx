const NavbarZing = () => {
    return (
        <div className="col-span-1 bg-[#231B2E] h-screen md:col-span-2 lg:col-span-1 cursor-pointer">
            <nav className="bg-[#231B2E] text-white">
                <ul className="flex flex-col space-y-2">
                    <li className="py-3 px-5 hover:bg-gray-700">
                        <i className="fa fa-book"></i>
                        <span className="ml-2">Thư viện</span>
                    </li>
                    <li className="py-3 px-5 hover:bg-gray-700">
                        <i className="fa fa-book"></i>
                        <span className="ml-2">Khám phá</span>
                    </li>
                    <li className="py-3 px-5 hover:bg-gray-700">
                        <i className="fa fa-book"></i>
                        <span className="ml-2">#zingchat</span>
                    </li>
                    <hr className="my-2 border-t border-gray-600"></hr>
                    <li className="py-3 px-5 hover:bg-gray-700">
                        <i className="fa fa-book"></i>
                        <span className="ml-2">Radio</span>
                    </li>
                    <li className="py-3 px-5 hover:bg-gray-700">
                        <i className="fa fa-star"></i>
                        <span className="ml-2">BXH Nhạc Mới</span>
                    </li>
                    <li className="py-3 px-5 hover:bg-gray-700">
                        <i className="fa fa-star"></i>
                        <span className="ml-2">Chủ đề & Thể Loại</span>
                    </li>
                    <li className="py-3 px-5 hover:bg-gray-700">
                        <i className="fa fa-star"></i>
                        <span className="ml-2">Top 100</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarZing
