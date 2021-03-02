import './App.css';
import CalculationForm from './components/CalculationForm' 
import { useEffect, useState } from 'react';

function App() {
  const [calcs, setCalcs] = useState([{'name':'Calculator #1','isVisible':true}, 
                                      {'name':'Calculator #2','isVisible':false},
                                      {'name':'Calculator #3','isVisible':false},
                                      {'name':'Calculator #4','isVisible':false},
                                      {'name':'Calculator #5','isVisible':false},])
  
  const [cControl, setcControl] = useState(0)

  function handleNewCalculatorAction() {
    if(cControl < 5) {
      let interval = cControl + 1
      if(interval != 5){
        let cArr = [...calcs]
        cArr[interval].isVisible = true
        setCalcs(cArr)
        setcControl(cControl + 1)
      }
    }
  }

  function handleCaclRemoval() {
    let cArr = [...calcs]
    cArr[cControl].isVisible = false
    setCalcs(cArr)
    setcControl(cControl - 1)
  }
  
  return (
    <>
    {
    calcs.map(e => {
      if(e.isVisible) {
        return <CalculationForm handleDeletion={handleCaclRemoval}/>
      }
    })
    }
    <button onClick={handleNewCalculatorAction}>Add</button>
    </>
    
  );
}

export default App;
