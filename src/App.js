/* eslint-disable no-unused-vars */

import './App.css';
import ClassIntervalCounter from './Hooks/ClassIntervalCounter';
import ClassMousePosition from './Hooks/ClassMousePosition';
import HideMousePosition from './Hooks/HideMousePosition';
import HookintervalCounter from './Hooks/HookintervalCounter';
import HookMousePosition from './Hooks/HookMousePosition';
import MouseXY from './Hooks/MouseXY';


function App() {
  return (
    <div className="App">
     
      {/* <ClassMousePosition/> */}
      {/* <HookMousePosition/> */}
      {/* <HideMousePosition/> */}
      {/* <ClassIntervalCounter/> */}
      <HookintervalCounter/>
    </div>
  );
}

export default App;
