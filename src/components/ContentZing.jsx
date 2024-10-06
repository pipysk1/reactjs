import ContentZingCenter from "./ContentZingCenter";
import ContentZingTop from "./ContentZingTop";

const ContentZing = () => {
    return (
        <div className="col-span-8 bg-[#170F23] relative h-full">
            <div className="sticky top-0 w-full bg-[#170F23] z-50 ">
                <ContentZingTop />
            </div>
            <div className="">
                <ContentZingCenter />
            </div>
        </div>
    );
};

export default ContentZing;
