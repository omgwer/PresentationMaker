import { Header } from './components/header/Header';
import { Toolbar } from './components/toolbar/Toolbar';
import { Workspace } from './components/workspace/Workspace';
import {AppProps} from './types/appProps';

function App(props:AppProps) {
  // var myPresentation: Presentation = InitializePresentation();
  return (
    <div className='test'>
      <Header presentation={props.presentation} />
      <Toolbar presentation={props.presentation}/>
      <Workspace presentation={props.presentation}/>      
    </div>
  );
};

export default App;