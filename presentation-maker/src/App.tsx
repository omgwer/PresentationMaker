import React from 'react';
import { Header } from './components/header/Header';
import { Toolbar } from './components/toolbar/Toolbar';
import { WorkspaceWrapper } from './components/WorkspaceWrapper/WorkspaceWrapper';
const App = () => {
  return (
    <div className='test'>
      <Header />
      <Toolbar />
      <WorkspaceWrapper />      
    </div>
  );
};

export default App;