import { useContext } from 'react';
import MoonIcon from '../assets/icon-moon.svg';
import SunIcon from '../assets/icon-sun.svg';
import { UserContext } from '../context/userContext';

const Header = ({ toggleTheme, darkMode }) => {
  const { state } = useContext(UserContext);
  return (
    <div
      className={`flex justify-between items-center font-bold ${
        state.isError && 'mb-12'
      }`}
    >
      <h2 className='text-2xl py-1 tablet:text-2xl desktop:text-4xl dark:text-white'>
        devfinder.
      </h2>
      <div
        className='flex gap-4 items-center text-sm tablet:text-base desktop:text-lg cursor-pointer hover:opacity-50'
        onClick={toggleTheme}
      >
        <p className='tracking-widest dark:text-white'>
          {darkMode ? 'LIGHT' : 'DARK'}
        </p>
        <span>
          <img className='w-5 h-5' src={darkMode ? SunIcon : MoonIcon} />
        </span>
      </div>
    </div>
  );
};

export default Header;
