import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../components/layout/Layout ';
import Error from '../pages/Error';

// استيراد مكون التحميل المخصص
import LoadingComponent from '../components/ui/LoadingComponent';

// تحميل الصفحات بشكل غير متزامن باستخدام `lazy`
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const OurTeam = lazy(() => import('../pages/OurTeam'));
const Projects = lazy(() => import('../pages/Projects'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "Services",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "Projects",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "ourteam",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <OurTeam />
          </Suspense>
        ),
      },
      {
        path: "contactus",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <ContactUs />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouts = () => {
  return <RouterProvider router={router} />;
}

export default AppRouts;
