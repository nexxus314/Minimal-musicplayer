import React from 'react'

const Card = ({track,onClick}) => {
  return (
    <div>
     <div
      className="flex flex-row bg-white border font-absans border-gray-200 shadow-4xl rounded-xl p-4 cursor-pointer m-2 hover:bg-gray-50 transition  "
    
      onClick={onClick}
    >
      <img
        src={track.thumbnail}
        alt="thumbnail"
        className="w-16 h-16 rounded-lg object-cover"
      />

      <div className="flex flex-col justify-center ml-4">
        <h2 className="font-semibold">{track.title}</h2>
        <p className="text-gray-600 text-sm">{track.artist}</p>
      </div>
    </div>
    </div>
  );
};

export default Card