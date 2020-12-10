
import './App.css';

import CounterHook from './Hooks/CounterHook';
import HookCounter from './Hooks/HookCounter';
import HookPrevState from './Hooks/HookPrevState';
import HooksStateObject from './Hooks/HooksStateObject';
import HookStateBootstrap from './Hooks/HookStateBootstrap';

function App() {
  return (
    <div className="App">
      {/* <CounterHook/> */}
      {/* <HookCounter/> */}
      {/* <HookPrevState/> */}
      {/* <HooksStateObject/> */}
      <HookStateBootstrap/>
    </div>
  );
}

export default App;
