import '@/style/global.css';
import 'pretendard/dist/web/static/pretendard.css';
import Footer from '@/component/layout/footer';
import Header from '@/component/layout/header';
import { Router } from '@/page';
import ScrollToTop from './component/common/scroll-to-top';
import { LNBToggleProvider } from './context/lnb-toggle-context';
import { LocalNavigationProvider } from './context/local-navigation-context';

const App = () => {
  return (
    <div className='flex size-full flex-col'>
      <ScrollToTop />
      <LocalNavigationProvider>
        <LNBToggleProvider>
          <Header />
          <Router />
          <Footer />
        </LNBToggleProvider>
      </LocalNavigationProvider>
    </div>
  );
};

export default App;
