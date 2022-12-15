import React from 'react';
import { Header } from './components/header/Header';
import { Toolbar } from './components/toolbar/Toolbar';
import { Preview } from './components/preview/preview';
import {Workspace} from './components/workspace/workspace';
const App = () => {
  return (
    <div className='test'>
      <Header />
      <Toolbar />      
      <Preview />
      <Workspace />
    </div>
  );
};

export default App;