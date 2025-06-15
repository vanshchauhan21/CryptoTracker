import Button from "../components/Common/Button";
import Header from "../components/Common/Header";


// Import animation data
import Lottie from "react-lottie";
import animationData from "../assets/emptyanimation.json";
function News() {

    // Animation options for the Lottie component

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Header />


            <div className="h-[500px] flex flex-col justify-center items-center">
                {/* Animation */}
                <Lottie options={defaultOptions} height={250} width={200} />
                <h1>Sorry, No Items In The News.</h1>
                <div>
                    <a href="/dashboard">
                        <Button text="Dashboard" />
                    </a>
                </div>
            </div>
        </div>
    );

}

export default News;
