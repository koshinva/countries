import { useEffect } from 'react';
import './App.scss';
import { Countries, Header } from './components';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { setThemeHTML } from 'utils';
import { useActions } from 'hooks/useActions';

function App() {
  const { theme } = useTypedSelector((store) => store.app);
  const { getAllCountries } = useActions();

  useEffect(() => {
    setThemeHTML(theme);
  }, [theme]);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <>
      <Header />
      {/* <ControlPanel /> */}
      <Countries />
    </>
  );
}

export default App;
