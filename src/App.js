import react from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import UseEffectCounterOne from './components/UseEffectCounterOne'
import HookMouse from './components/HookMouse'

function App() {
  return (
    <div className="App">
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
