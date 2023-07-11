import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './scenes/global/Navbar';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Master() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default Master;
