import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => { 

    const [nav, setnav] = useState(false)

    const handleNav = () => { 
        setnav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resource</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact Us</li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                
            </div>

            <div className= {nav 
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 " 
                : "fixed left-[-100%] "}
                >
           
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
                <ul className="pt-12 uppercase p-4">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resource</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar