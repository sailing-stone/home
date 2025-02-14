import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from '@/component/common/spinner';
import LAZY_PAGE from '@/constant/lazy-page';
import URL from '@/constant/url';

const MainPage = lazy(LAZY_PAGE[URL.MAIN]);
const ServicePage = lazy(LAZY_PAGE[URL.SERVICE]);
const RecruitPage = lazy(LAZY_PAGE[URL.RECRUIT]);
const ContactPage = lazy(LAZY_PAGE[URL.CONTACT]);
const SolutionPage = lazy(LAZY_PAGE[URL.SOLUTION]);
const IntroducePage = lazy(LAZY_PAGE[URL.INTRODUCE]);

const Router = () => {
  return (
    <Suspense
      fallback={
        <div className='flex w-full grow items-center justify-center'>
          <Spinner />
        </div>
      }
    >
      <Routes>
        <Route
          path={URL.MAIN}
          element={<MainPage />}
        />
        <Route
          path={URL.SERVICE}
          element={<ServicePage />}
        />
        <Route
          path={URL.RECRUIT}
          element={<RecruitPage />}
        />
        <Route
          path={URL.CONTACT}
          element={<ContactPage />}
        />
        <Route
          path={URL.SOLUTION}
          element={<SolutionPage />}
        />
        <Route
          path={URL.INTRODUCE}
          element={<IntroducePage />}
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
