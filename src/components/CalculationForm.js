import { useEffect, useState } from 'react';


export default function CalculationFrom() {
    const [result, setResult] = useState(0)

    const handleInputChange = (e) => {
        switch(e.target.name) {
          case 'height':
            setMessurments({...messurments, height: e.target.value})
            console.log(messurments)
          break;
          case 'width':
            setMessurments({...messurments, width: e.target.value})
            console.log(messurments)
          break;
          case 'owidth':
            setMessurments({...messurments, owidth: e.target.value})
            console.log(messurments)
          break;
          case 'oheight':
            setMessurments({...messurments, oheight: e.target.value})
            console.log(messurments)
          break;
      
        }
      }
    
    const calculation = () => {
        return (messurments.width*messurments.height)-(messurments.owidth*messurments.oheight)
    }
    
    const [messurments, setMessurments] = useState({
        width: 0,
        height: 0,
        owidth: 0,
        oheight: 0
    });
    
    useEffect(() => {
        setResult(calculation)
      })

   return (
    <div className="area-calculator">
    <form>
      <div className="calc-surface">
        <h3>Surface</h3>
      </div>
      <div className="messurments-wrapper">
        <label>Height</label>
        <input name="height" type="number" value={messurments.height} onChange={handleInputChange} placeholder="Height"></input>
        <label>Width</label>
        <input name="width" type="number" value={messurments.width} onChange={handleInputChange} placeholder="Width"></input> 
      </div>
      <div className="obstacle-wrapper">
        <h3>Obstacle (Door etc.)</h3>
        <label>Height</label>
        <input name="oheight" value={messurments.oheight} onChange={handleInputChange} type="number" placeholder="Height"></input>
        <label>Width</label>
        <input name="owidth" value={messurments.owidth} onChange={handleInputChange} type="number" placeholder="Width"></input>
      </div>
      <span>{result}</span>
      <button></button>
    </form>
    </div>
   ) 
}