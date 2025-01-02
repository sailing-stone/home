import { Routes, Route } from 'react-router-dom';
import * as Pages from '@/page';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Pages.MainPage />}
      />
    </Routes>
  );
};

export default Router;
