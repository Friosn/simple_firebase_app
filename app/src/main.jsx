import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Events from './pages/Events';
import Home from './pages/Home';
/* import Login from './pages/Login'; */
import NotFound from './pages/NotFound';
import Ranking from './pages/Ranking';
import Register from './pages/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<Login />} /> */}
          <Route index element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'ranking',
            element: <Ranking />,
          },
          {
            path: 'events',
            element: <Events />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]); */
