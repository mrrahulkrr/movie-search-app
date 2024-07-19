import { useEffect, useState } from 'react';
import { fetchRandomDogImage } from '../../utils/api';

export default function MovieCard({ movie }) {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const getDogImage = async () => {
      try {
        const image = await fetchRandomDogImage();
        setDogImage(image);
      } catch (error) {
        console.error('Failed to fetch dog image:', error);
      }
    };

    getDogImage();
  }, []);

  const displayGenres = movie.subject?.slice(0, 5).join(', ') + (movie.subject?.length > 5 ? '...' : '');


  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      {dogImage && <img src={dogImage} alt="Random dog" className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9 mb-4" />}
      <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
      <p className="text-sm text-gray-600 mb-2">Authors: {movie.author_name?.join(', ')}</p>
      <p className="text-sm text-gray-600 mb-2">Published Year: {movie.first_publish_year}</p>
      <p className="text-sm text-gray-600 mb-2">Genres: {displayGenres}</p>
      <p className="text-sm text-gray-600 mb-4">Language: {movie.language?.join(', ')}</p>
      <p className="text-sm text-gray-700">Description: {movie.first_sentence ?? 'No description available.'}</p>
    </div>
  );
}
