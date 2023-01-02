import { Header } from './components/header/Header';
import { Toolbar } from './components/toolbar/Toolbar';
import { Workspace } from './components/workspace/Workspace';
import {AppProps} from './types/appProps';

const App: React.FC = () => {
  // var myPresentation: Presentation = InitializePresentation();
  return (
    <div className='test'>
      <Header />
      <Toolbar />
      <Workspace />      
    </div>
  );
};

export default App;