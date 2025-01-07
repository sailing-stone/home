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
      <Route
        path={URL.CONTACT}
        element={<Pages.ContactPage />}
      />
      <Route
        path={URL.SOLUTION}
        element={<Pages.SolutionPage />}
      />
    </Routes>
  );
};

export default Router;
