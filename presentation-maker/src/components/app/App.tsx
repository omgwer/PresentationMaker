import { Header } from '../header/Header';
import { Toolbar } from '../header/toolbar/Toolbar';
import { Workspace } from '../workspace/Workspace';

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