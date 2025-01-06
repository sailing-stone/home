import { Routes, Route } from 'react-router-dom';
import URL from '@/constant/url';
import * as Pages from '@/page';

const Router = () => {
  return (
    <Routes>
      <Route
        path={URL.MAIN}
        element={<Pages.MainPage />}
      />
      <Route
        path={URL.SERVICE}
        element={<Pages.ServicePage />}
      />
      <Route
        path={URL.RECRUIT}
        element={<Pages.RecruitPage />}
      />
    </Routes>
  );
};

export default Router;
