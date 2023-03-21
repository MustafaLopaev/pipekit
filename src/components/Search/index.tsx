import './index.css';

import SearchIcon from '@mui/icons-material/Search';

import { SearchInterface } from './index.d';

export function Search({}: SearchInterface) {
  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="search"
        placeholder="Type to Search"
        aria-label="Search"
      />
      <button className="search-btn" type="submit">
        <SearchIcon />
      </button>
    </div>
  );
}
