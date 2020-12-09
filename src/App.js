import logo from './logo.svg';
import './App.css';
import Welcomemsg from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message'
import Counter from './component/Counter'
import FunctiononClick from './component/FunctiononClick';
import ClassonClick from './component/ClassonClick';
import Eventbind from './component/Eventbind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import SuperHero from './component/SuperHero';
import Styling from './component/Styling';
import inline from './component/Inline';
import Inline from './component/Inline';
import './appcss.css'
import styles from './appcss.module.css'
import Form from './component/Form'
import Eventbind2 from './component/Eventbind2';
import Classcounter from './component/Classcounter';
import ComponentLifecycle from './component/ComponentLifecycle';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import ParentComp from './component/ParentComp';
import RefDemo from './component/RefDemo';
import FocusInput from './component/FocusInput';
import FRparentinput from './component/FRparentinput';
import PortalDemo from './component/PortalDemo';
import Props from './main-topics/Props';
import BtnUpdateState from './main-topics/BtnUpdateState';
import CssStyling from './main-topics/CssStyling';
import Hero from './main-topics/Hero';
import ErrorBoundary from './main-topics/ErrorBoundary';
import PostList from './httpGetPost/PostList';
import PostContent from './httpGetPost/PostContent';
import PostForm from './httpGetPost/PostForm';
import PostForm2 from './httpGetPost/PostForm2';
import BtsFile from './Bootstrap/BtsFile';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
          <Hero heroname='Captain America'/>
      </ErrorBoundary>
      <ErrorBoundary>  
          <Hero heroname='Black Panther'/>
      </ErrorBoundary>
      <ErrorBoundary>  
          <Hero heroname='Iron man'/>
      </ErrorBoundary>
      <ErrorBoundary>  
          <Hero heroname='Eternal'/>
      </ErrorBoundary>     */}
      {/* <PostList/> */}
      {/* <PostContent/> */}
      {/* <PostForm2/> */}
      <BtsFile/>
    </div>
  );
}

export default App;
