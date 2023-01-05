import { Header } from '../header/Header';
import { Toolbar } from '../headerToolbar/Toolbar';
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