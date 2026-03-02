import { useDispatch } from 'react-redux'
import './App.css'
import { incrementCountAC, resetCountAC } from './common/store/reducers/counter-reducer';
import { useAppSelector } from './common/store/reducers/useAppSelector';

function App() {
  const dispatch = useDispatch();
  const counter =  useAppSelector((state) => state.counter.counterValue);
  const settings =  useAppSelector((state) => state.settings)

  function onClickHandler () {
    if(counter < settings.maxValue) {
      dispatch(incrementCountAC())
    }
    
  }

  function onClickHandlerReset () {

    dispatch(resetCountAC({minValue: settings.minValue}));
  }
  
  
  return (
    <>
      <p>{counter}</p>
      <button onClick={onClickHandler}>increment</button>
      <button onClick={onClickHandlerReset}>reset</button>
    </>
  )
}

export default App
