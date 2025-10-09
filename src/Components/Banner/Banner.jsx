import { Link } from "react-router";
import heroImg from "../../assets/hero.png";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png";

const Banner = () => {
  return (
    <div className=" bg-[#e6e6e6]">
      <div className="">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="text-5xl font-bold text-center p-10">
            <h1 className="mb-3">We Build</h1>
            <h1><span className="font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-6xl">Productive</span> Apps</h1>
          </div>
          <div className="text-center max-w-9/12 mb-5"><p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p></div>
          <div className="flex justify-center items-center gap-10 mb-10">
            <Link className="btn font-bold bg-[#e6e6e6] border-1 border-gray-400 hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white " to="https://play.google.com/store/apps" target="_blank" > <img src={googlePlay} alt="googlePlay" className="w-6 h-6" />  Google Play </Link>
            <Link className="btn font-bold bg-[#e6e6e6] border-1 border-gray-400 hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white " to="https://www.apple.com/app-store/" target="_blank" > <img src={appStore} alt="appStore" className="w-6 h-6"/> App Store</Link>
          </div>
        </div>
        <div className="container mx-auto flex justify-center items-center">
          <img src={heroImg} alt="Banner-hero-Img" />
        </div>
        <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-center py-4">
          <div className="container mx-auto">
            <div><h1 className="text-3xl font-bold p-8">Trusted by Millions, Built for You</h1></div>
            <div className="md:flex justify-around items-center gap-5 pb-10">
              <div className="text-[#cbcbce]">
                <h2>Total Downloads</h2>
                <h1 className="text-5xl font-bold p-2 text-white">29.6M</h1>
                <h3>37% more than last month</h3>
              </div>
              <div className="text-[#cbcbce]">
                <h2>Total Reviews</h2>
                <h1 className="text-5xl font-bold p-2 text-white">906K</h1>
                <h3>43% more than last month</h3>
              </div>
              <div className="text-[#cbcbce]">
                <h2>Active Apps</h2>
                <h1 className="text-5xl font-bold p-2 text-white">152+</h1>
                <h3>59 more will Launch</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner ;