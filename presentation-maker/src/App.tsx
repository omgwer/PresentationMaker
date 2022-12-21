import React from 'react';
import { Header } from './components/header/Header';
import { Toolbar } from './components/toolbar/Toolbar';
import { Workspace } from './components/workspace/Workspace';

const App = () => {
  return (
    <div className='test'>
      <Header/>
      <Toolbar/>
      <Workspace/>      
    </div>
  );
};

export default App;