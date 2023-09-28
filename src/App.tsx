import { useEffect } from 'react';
import './App.scss';
import { Header } from './components';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { setThemeHTML } from 'utils';

function App() {
  const { theme } = useTypedSelector((store) => store.app);

  useEffect(() => {
    setThemeHTML(theme);
  }, [theme]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
