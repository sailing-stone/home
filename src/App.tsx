import '@/style/global.css';
import 'pretendard/dist/web/static/pretendard.css';
import Footer from '@/component/layout/footer';
import Header from '@/component/layout/header';
import { Router } from '@/page';
import { LocalNavigationProvider } from './context/local-navigation-context';

const App = () => {
  return (
    <div className='size-full'>
      <LocalNavigationProvider>
        <Header />
        <Router />
        <Footer />
      </LocalNavigationProvider>
    </div>
  );
};

export default App;
