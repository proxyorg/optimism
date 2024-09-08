import { useState } from 'react';
import { filterPagesByTags, pages } from './filter'; // Adjust the import path as needed

export default function SearchComponent() {
  const [searchTags, setSearchTags] = useState([]);
  const [filteredPages, setFilteredPages] = useState(pages);

  const handleSearch = (tags) => {
    setSearchTags(tags);
    const results = filterPagesByTags(tags);
    setFilteredPages(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by tags..."
        onChange={(e) => handleSearch(e.target.value.split(','))}
      />
      <div>
        {filteredPages.map((page, index) => (
          <div key={index}>
            <h2>{page.title}</h2>
            <p>{page.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}