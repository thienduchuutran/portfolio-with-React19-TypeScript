import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'styles/global.scss';
import 'lenis/dist/lenis.css';
import Layout from '@/layout.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from 'pages/home.tsx';
import ProjectPage from '@/pages/project';
import AboutPage from '@/pages/about';
import { AppContextProvider } from '@/components/context/app.context';
import { ReactLenis } from 'lenis/react';
import '@/i18n.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ]
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        }}
      >
        <RouterProvider router={router} />
      </ReactLenis>
    </AppContextProvider>
  </StrictMode>,
)
