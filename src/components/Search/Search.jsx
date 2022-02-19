import './Search.css';
const Search = () => {
  
  return (
    <div className='search'>
      <form className='search__form'>
        <input className='search__input' type='text' placeholder='Search' />
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
      </form>
    </div>
  );
};

export default Search;
