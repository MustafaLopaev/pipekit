import './App.css';

import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './router';

const App = () => {
  const content = useRoutes(routes());
  return <div className="App">{content}</div>;
};

export default App;
