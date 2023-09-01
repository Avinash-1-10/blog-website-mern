import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
  return (
    <div className="flex md:px-20 px-5 justify-between items-center py-5 shadow-md relative">
      <span className="text-lg font-semibold text-blue-600">Tech Blogs</span>
      <div className="md:flex gap-10 text-md font-semibold hidden">
        <span>Home</span>
        <span>Create</span>
        <span>About</span>
      </div>
      {!toggle?<AiOutlineMenu className="md:hidden text-[25px] " onClick={handleToggle}/>:<AiOutlineClose className="md:hidden text-[25px] " onClick={handleToggle}/>}
      { toggle &&
        <div className="absolute flex flex-col gap-5 w-[100%] h-screen px-5 py-5 right-0 z-50 top-[67px] bg-blue-600 text-white text-lg font-semibold">
          <span>Home</span>
          <span>Create</span>
          <span>About</span>
        </div>
      }
    </div>
  );
};

export default Navbar;
