import './App.css';
import  UseStateHook  from './hooks/usestate';
import  UseEffectHook  from './hooks/useEffect';
import  UseRefHook  from './hooks/useRef';
import  UseMemoHook  from './hooks/useMemo';
import  UseCallbackHook  from './hooks/useCallback';
import  UseContextHook from './hooks/useContext';
import  UseReducerHook from './hooks/useReducer';
import  UseCustomHook from './hooks/customHook';


function App() { 
  return (
    <div className="App">
     <UseStateHook></UseStateHook> 
     <hr></hr>
     <UseEffectHook></UseEffectHook> 
     <hr></hr>
     <UseRefHook></UseRefHook> 
     <hr></hr>
     <UseMemoHook></UseMemoHook> 
     <hr></hr>
     <UseCallbackHook></UseCallbackHook> 
     <hr></hr>
     <UseContextHook></UseContextHook> 
     <hr></hr>
     <UseReducerHook></UseReducerHook> 
     <hr></hr>
     <UseCustomHook></UseCustomHook> 
    </div>
  );
}

export default App;
