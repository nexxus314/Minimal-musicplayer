import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiMusicNotesSimpleFill } from "react-icons/pi";


const Header = ({searchQuery,setSearchQuery,SearchSong,setShowList}) => {


  const handleSearchInputs=(e)=>{
setSearchQuery(e.target.value)
  }
 
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="w-full flex flex-row items-center justify-between px-6  sm:px-8 py-4 gap-2">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="hidden sm:block font-absans text-lg md:text-xl whitespace-nowrap">M I N I M A L</span>
            <span className="block sm:hidden font-absans text-2xl pt-2">
      <PiMusicNotesSimpleFill />

    </span>
          </a>
          <div className="flex flex-row justify-center gap-2">
            <input  className="p-2 rounded-lg" type="text" placeholder="Search Songs..." onChange={handleSearchInputs} />
            <button>
              <CiSearch  className='cursor-pointer' onClick={()=>{
              SearchSong();
                setShowList(true);}} size={40} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
