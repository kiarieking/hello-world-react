/* eslint-disable no-unused-vars */

import './App.css';
import ClassMousePosition from './Hooks/ClassMousePosition';
import HideMousePosition from './Hooks/HideMousePosition';
import HookMousePosition from './Hooks/HookMousePosition';
import MouseXY from './Hooks/MouseXY';


function App() {
  return (
    <div className="App">
     
      {/* <ClassMousePosition/> */}
      {/* <HookMousePosition/> */}
      <HideMousePosition/>
    </div>
  );
}

export default App;
