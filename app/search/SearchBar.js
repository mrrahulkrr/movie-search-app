import { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm.trim());
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center mt-8 mb-4 relative">
      <input
        type="text"
        className="w-full md:w-96 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading} // Disable input while loading
      />
      <button
        className={`ml-2 px-4 py-3 bg-blue-500 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        onClick={handleSearch}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8zm2 0a6 6 0 1010.197-3.93l-1.57.785A4 4 0 118 12V4.07"></path>
          </svg>
        ) : (
          'Search'
        )}
      </button>
      {isLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-75 z-10 flex items-center justify-center">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
