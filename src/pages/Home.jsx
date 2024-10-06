import Navbar from "../components/Navbar";
import LeftSiderZing from "../components/LeftSiderZing";
import ContentZing from "../components/ContentZing";
import RightSiderZing from "../components/RightSiderZing";

const Home = () => {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-9 "> {/* Adjust height according to your navbar */}
                <div className="sticky top-0 h-screen "> {/* Adjust the height here */}
                    <LeftSiderZing />
                </div>
                <div className="col-span-8 "> {/* Adjust margin-left according to the width of LeftSiderZing */}
                    <ContentZing />
                </div>
            </div>
        </div>
    );
};

export default Home;
