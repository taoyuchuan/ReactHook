import react from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import UseEffectCounterOne from './components/UseEffectCounterOne'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'

function App() {
  return (
    <div className="App">
      <MouseContainer />
      <HookMouse />
      <UseEffectCounterOne />
      <HookCounterFour />
      <HookCounterThree />
      <HookCounterTwo />
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;
