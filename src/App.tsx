import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { CountryDetail, Layout, Main, NotFound } from './components';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { setThemeHTML } from 'utils';
import { useActions } from 'hooks/useActions';

function App() {
  const { theme } = useTypedSelector((store) => store.app);
  const { countries } = useTypedSelector((store) => store.countries);
  const { getAllCountries, renderCountries } = useActions();

  useEffect(() => {
    setThemeHTML(theme);
  }, [theme]);

  useEffect(() => {
    if (!countries.length) {
      getAllCountries();
    }
    renderCountries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/country/:slug" element={<CountryDetail />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
