import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About    from './components/pages/About';
import Home     from './components/pages/Home';
import Shop     from './components/pages/Shop';
import Layout   from './components/Layout';
import All      from './components/pages/Shop/All';
import Men      from './components/pages/Shop/Men';
import Women    from './components/pages/Shop/Women';
import NotFound from './components/NotFound';

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'shop',
          element: <Shop />,
          children: [
            {
              index: true,
              element: <All />
            },
            {
              path: 'men',
              element: <Men />
            },
            {
              path: 'women',
              element: <Women />
            }
          ]
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;