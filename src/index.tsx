import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './global.css';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
export type StoreType = ReturnType<typeof rootReducer>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
