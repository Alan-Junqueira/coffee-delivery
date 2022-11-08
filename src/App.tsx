import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContext';
import { Router } from './router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Router />
        </CartContextProvider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
