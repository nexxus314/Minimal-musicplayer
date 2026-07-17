import React from "react";

const Card = ({ track, onClick }) => {
  return (
    <div>
      <div
        className="w-[350px] flex flex-row bg-[#e9edc9] border font-[Poppins
      ] border-gray-200 bg-no-repeat bg-[position:30%_30%]  shadow-4xl rounded-xl p-4 cursor-pointer m-2 hover:bg-[#fefae0] transition"
       style={{
        backgroundImage: `url(${'/spidey7.jpg'})`,
      }}

        onClick={onClick}
      >
        <img
          src={track.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 rounded-lg object-cover"
        />

        <div className="flex flex-col justify-center ml-4">
          <h2 className="font-semibold text-[12px] font-[Poppins] text-white">{track.title}</h2>
          <p className="text-gray-400 text-[10px] font-[Poppins]">{track.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
