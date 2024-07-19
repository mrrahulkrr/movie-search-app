"use client"
import { useState } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import { fetchMovies } from '../../utils/api';

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}
