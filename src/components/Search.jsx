import { useRef, useContext } from 'react';
import { UserContext } from '../context/userContext';

import SearchIcon from '../assets/icon-search.svg';
import Spinner from './Spinner';

const Search = () => {
  const searchRef = useRef();
  const { dispatch, state } = useContext(UserContext);

  const handleSearch = async () => {
    const user = searchRef.current.value;
    if (!user) return;
    try {
      dispatch({ type: 'FETCH_START' });
      const res = await fetch(`https://api.github.com/users/${user}`);
      const json = await res.json();
      if (res.status !== 200) {
        dispatch({ type: 'FETCH_ERROR', payload: json.message });
      } else {
        dispatch({ type: 'FETCH_SUCCESS', payload: json });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white dark:bg-lightBlue p-3 shadow-lg rounded-2xl flex justify-between items-center relative'>
      {state.isError && (
        <span className='absolute right-1 top-[-28px] text-base text-red-600'>
          {state.error}
        </span>
      )}
      <div className='flex gap-2 items-center'>
        <img className='w-5 h-5 tablet:w-7 tablet:h-7' src={SearchIcon} />
        <input
          ref={searchRef}
          className='p-1 bg-transparent outline-none tablet:w-[250px] desktop:w-[480px] mobile:text-sm mobile:placeholder:text-xs tablet:text-base tablet:placeholder:text-base desktop:text-lg desktop:placeholder:text-lg placeholder:text-primaryLight dark:placeholder:text-white dark:text-white'
          type='text'
          placeholder='Search Github username'
        />
      </div>
      <button
        className='bg-primary text-light font-bold rounded-lg hover:opacity-70 mobile:text-sm px-3 py-2 tablet:text-base'
        onClick={handleSearch}
      >
        {!state.isLoading ? (
          'Search'
        ) : (
          <div className='flex items-center text-white'>
            <Spinner />
            Loading
          </div>
        )}
      </button>
    </div>
  );
};

export default Search;
