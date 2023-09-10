import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Router } from './router';

import ToastContainer from './components/Toast/ToastContainer';

import GlobalStyles from './assets/styles/globalStyles';
import { light } from './assets/styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
