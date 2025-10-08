import { Link } from "react-router";
import imgLogo from "../../assets/logo.png";
import gitImg from "../../assets/git.png";

const Navbar = () => {
    return (
        <div className=" bg-base-100 shadow-sm md:px-12">
            <div className="container mx-auto navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                            <li className="hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white rounded"><Link to="/">Home</Link></li>
                            <li className="hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white rounded"><Link to="/Apps">Apps</Link></li>
                            <li className="hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white rounded"><Link to="/Installation">Installation</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className=" flex justify-around items-center gap-2 text-xl font-bold cursor-pointer"><img src={imgLogo} alt="Logo-img" className="h-8 w-8" /> <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text hover:text-transparent">HERO.IO</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li className="hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white rounded"><Link to="/">Home</Link></li>
                        <li className="hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white rounded"><Link to="/Apps">Apps</Link></li>
                        <li className="hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white rounded"><Link to="/Installation">Installation</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex ">
                    <Link className="btn font-bold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-tl hover:text-white rounded" to="https://github.com/shouravhasanshurjo8201" target="_blank" > <img src={gitImg} alt="" /> Contribute</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;