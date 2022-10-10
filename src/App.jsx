import Header from './components/Header';
import Search from './components/Search';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem('darkTheme', true);
  }, []);

  const [darkMode, setDarkMode] = useState(true);
  const [data, setData] = useState({});

  const toggleTheme = () => {
    localStorage.setItem('darkTheme', !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('darkTheme'));
    const root = window.document.documentElement;

    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  return (
    <main className='bg-light dark:bg-darkBlue w-screen h-screen grid place-items-center'>
      <div className='container mx-auto space-y-6 p-2 mobile:min-w-[calc(100%_-_2rem)] desktop:min-w-[580px]'>
        <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        <Search />
        <Profile />
      </div>
    </main>
  );
}

export default App;
