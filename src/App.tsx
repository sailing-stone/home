import '@/style/global.css';
import 'pretendard/dist/web/static/pretendard.css';
import Footer from '@/component/layout/footer';
import Header from '@/component/layout/header';
import { Router } from '@/page';

const App = () => {
  return (
    <div className='size-full'>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
