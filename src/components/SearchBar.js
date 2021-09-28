import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { todoSearch} from '../redux/notes/notesSlice';
const SearchBar = () => {
const [query, setQuery] = useState('');
const dispatch = useDispatch();
const handleChange = (event) => {
  setQuery(event.target.value);
}
const handleSubmit = () => {
  dispatch(todoSearch(query));
}

  return (
    <div className="search-bar">
        <input id="search" type="text" value={query} onChange={handleChange} onKeyUp={handleSubmit} />
        <FaSearch id="search-icon"/>
    </div>
  )
}

export default SearchBar
