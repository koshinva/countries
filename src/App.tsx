import { useEffect } from 'react';
import './App.scss';
import { Countries, Header } from './components';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { setThemeHTML } from 'utils';
import { useActions } from 'hooks/useActions';

function App() {
  const { theme } = useTypedSelector((store) => store.app);
  const { countries } = useTypedSelector((store) => store.countries);
  const { getAllCountries } = useActions();

  useEffect(() => {
    setThemeHTML(theme);
  }, [theme]);

  useEffect(() => {
    if (!countries.length) {
      getAllCountries();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* <ControlPanel /> */}
        <Countries />
      </main>
    </>
  );
}

export default App;
