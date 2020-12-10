
import './App.css';

import CounterHook from './Hooks/CounterHook';
import HookCounter from './Hooks/HookCounter';
import HookPrevState from './Hooks/HookPrevState';

function App() {
  return (
    <div className="App">
      {/* <CounterHook/> */}
      {/* <HookCounter/> */}
      <HookPrevState/>
    </div>
  );
}

export default App;
