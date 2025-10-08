import { Link } from "react-router";
import imgLogo from "../../assets/logo.png";
import xLogo from "../../assets/xl.png";
import lLogo from "../../assets/il.png";
import fLogo from "../../assets/fbl.png";

const Footer = () => {
    return (

        <footer className="bg-[#001931] text-white p-10">
            <div className="container mx-auto ">
                <div className="md:flex md:justify-between md:items-center border-b border-gray-400">
                    <div className="md:ml-4 ">
                        <Link to="/" title="HERO.IO" className=" flex md:justify-around justify-center items-center gap-2 text-xl font-bold cursor-pointer mb-5 md:mb-1"><img src={imgLogo} alt="Logo-img" className="h-8 w-8" /> HERO.IO</Link>
                    </div>
                    <div className="text-center md:mr-4">
                        <div>
                            <h1 className="text-xl font-bold mb-5">Social Links</h1>
                        </div>
                        <div className="flex md:justify-around justify-center items-center gap-4 pb-4 md:pb-1">
                            <img src={xLogo} alt="Logo-img" className="h-6 w-6" />
                            <img src={lLogo} alt="Logo-img" className="h-6 w-6" />
                            <img src={fLogo} alt="Logo-img" className="h-6 w-6" />
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm mt-5">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved  by HERO.IO Ltd</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;