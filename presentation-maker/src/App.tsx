import React from 'react';
import { Header } from './components/Header/Header';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Workspace } from './components/Workspace/Workspace';

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