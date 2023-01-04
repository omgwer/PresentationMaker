import { Header } from '../header/Header';
import { Toolbar } from '../toolbar/Toolbar';
import { Workspace } from '../workspace/Workspace';
import { AppProps } from '../../types/AppProps';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Toolbar />
      <Workspace />      
    </div>
  );
};

export default App;