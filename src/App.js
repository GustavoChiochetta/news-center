import * as React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useRoutes,  } from 'react-router-dom';

import Home from './pages/Home';
import Edit from './pages/Edit';
import Show from './pages/Show';
import New from './pages/New';

const App = () => {
  return(
    <AppRoutes/>
  )
}

const AppRoutes = () => {
  let routes = [
    {path: '/', element: <Home/>},
    {path: '/show/:id', element: <Show/>},
    {path: '/edit/:id', element: <Edit/>},
    {path: '/new', element: <New/>}
  ]
  const appRoutes = useRoutes(routes);

  return appRoutes;
}

export default App;
