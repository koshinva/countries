import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { CountryDetail, Layout, Main, NotFound, Quiz } from './components';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    renderCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries.length]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/country/:slug" element={<CountryDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
