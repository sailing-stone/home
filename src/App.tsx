import '@/style/global.css';
import 'pretendard/dist/web/static/pretendard.css';
import Header from '@/component/layout/header';
import { Router } from '@/page';

const App = () => {
  return (
    <div className='size-full'>
      <Header />
      <Router />
    </div>
  );
};

export default App;
