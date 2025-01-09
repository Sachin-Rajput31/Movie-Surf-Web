import React from 'react';

const Searchbar = ({ searchMovie, setSearchMovie, fetchMovieData }) => {
  return (
    <div className='main flex justify-center py-5 px-4 shadow-lg'>
      <input
        type="text"
        placeholder='Search Movie'
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        className='w-80 rounded-lg bg-gray-100 placeholder-gray-500 px-2 py-2 outline outline-offset-2 outline-cyan-500 border-2 border-gray-300 hover:border-indigo-300 text-black'
      />
    
      <button
        onClick={fetchMovieData} 
        className='bg-sky-500 hover:bg-sky-700 px-4 outline outline-offset-2 outline-blue-500 text-white font-serif rounded-r-lg shadow-md border-b-2 border-t-2 border-r-2 border-gray-500'
      >
        Search
      </button>
      
    </div>
  );
};

export default Searchbar;
