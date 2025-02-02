 

//import { ReactDom } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ShopContextProvider } from './context/ShopContext.jsx';

const root= ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
  <App />
  </ShopContextProvider>
  </BrowserRouter>,

)
 
 