import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import SearchBar from './components/Searchbar';
import Home from './Home';

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();
      if (data.Response === 'True') {
        setAllMovieData(data.Search);
        setError(null); 
      } else {
        setAllMovieData([]);
        setError(data.Error);
      }
    } catch (error) {
      console.log(error);
      setError('Try Again,error Occured!'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        {error && <div className="error-message">{error}</div>}
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  );
}

export default App;
