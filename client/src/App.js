import { ThemeProvider } from '@mui/material/styles'; // we pass the theme that we have created before in theme.js in the app using this
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import { getDirection } from './localization';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@mui/styles';
import rtl from 'jss-rtl';
import Master from './Master';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state';

const store = configureStore({
  reducer: { cart: cartReducer }, // we can have multiple reducers here
});

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function App() {
  return getDirection() === 'ltr' ? (
    <StylesProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Master />
        </ThemeProvider>
      </Provider>
    </StylesProvider>
  ) : (
    <StylesProvider jss={jss}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Master />
        </ThemeProvider>
      </Provider>
    </StylesProvider>
  );
}

export default App;
