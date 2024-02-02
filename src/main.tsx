import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import 'styles/index.scss';
import { store } from 'store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
