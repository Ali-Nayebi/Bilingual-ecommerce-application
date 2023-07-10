import { ThemeProvider } from '@mui/material/styles'; // we pass the theme that we have created before in theme.js in the app using this
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { getDirection } from './localization';
import Routes from './Routes';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return getDirection() === 'ltr' ? (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  ) : (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
