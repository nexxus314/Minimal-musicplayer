import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiMusicNotesSimpleFill } from "react-icons/pi";
import HeroSection from "./HeroSection";


const Header = ({searchQuery,setSearchQuery,SearchSong,setShowList}) => {

 
  const handleSearchInputs=(e)=>{
setSearchQuery(e.target.value)
  }
 
  return (
    <div>
<header className="text-gray-600 body-font  bg-[white]/30 rounded-4xl backdrop-blur-sm bg-[#368F8B]/30 mx-4 mt-4 fixed top-0 left-0 right-0 shadow-xl z-50 ">       
 <div className="w-full flex flex-row items-center justify-between px-6 sm:px-8 py-2 gap-2">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 py-0 md:mb-0" onClick={()=>{setShowList(false)}}>
            <span className="hidden sm:block font-absans text-lg md:text-sm whitespace-nowrap " >M I N I M A L</span>
            <span className="block sm:hidden font-absans text-2xl pt-2">
      <PiMusicNotesSimpleFill />

    </span>
          </a>
          <div className="flex flex-row justify-center gap-2">
            <input  className="font-absans rounded-3xl text-sm text-center border-none" type="text" placeholder="Search Songs..." onChange={handleSearchInputs} onKeyUp={(e)=>{if(e.key==="Enter"){SearchSong();}}} />
            <button>
              <CiSearch  className='cursor-pointer' onClick={()=>{
              SearchSong();
                setShowList(true);}} size={30} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
