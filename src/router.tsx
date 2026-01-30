import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Debug: log the base URL
console.log('BASE_URL:', import.meta.env.BASE_URL);
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;
console.log('Router basename:', basename);

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Learn = lazy(() => import('./pages/Learn'));
const EntertainmentEvents = lazy(() => import('./pages/EntertainmentEvents'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/services', element: <Services /> },
        { path: '/learn', element: <Learn /> },
        { path: '/entertainment-events', element: <EntertainmentEvents /> },
        { path: '/blog', element: <BlogIndex /> },
        { path: '/blog/:slug', element: <BlogPost /> },
        { path: '/careers', element: <Careers /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <Home /> },
      ],
    },
  ],
  { basename: basename || undefined }
);
