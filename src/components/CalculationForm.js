import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'

export default function CalculationFrom(props) {
  console.log(props)  
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
    <Grid container direction="row" justify="flex-start" alignItems="center" className="area-calculator">
      <Grid item lg={1} md={1} sm={3}>
        <h2>Area No</h2> 
      </Grid>
        <Grid container  direction="column" justify="space-between" alignItems="flex-start" item xs={12} md={4} className="calc-surface">
          <Grid item xs={12}>
            <h3>Surface</h3>
          </Grid>
          <Grid container direction="row" className="messurments-wrapper">
            <Grid item xs={12} sm={6}>
              <label>Height</label>
              <input name="height" type="number" value={messurments.height} onChange={handleInputChange} placeholder="Height"></input>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Width</label>
              <input name="width" type="number" value={messurments.width} onChange={handleInputChange} placeholder="Width"></input> 
            </Grid>
          </Grid>
        </Grid>
        <Grid direction="column" justify="space-between" alignItems="flex-start" item xs={12} md={4} className="obstacle-wrapper">
          <Grid item xs={12}>
            <h3>Obstacle (Door etc.)</h3>
          </Grid>
          <Grid container direction="row" className="messurments-wrapper">
            <Grid item xs={12} sm={6}>
              <label>Height</label>
              <input name="oheight" value={messurments.oheight} onChange={handleInputChange} type="number" placeholder="Height"></input></Grid>
            <Grid item xs={12} sm={6}>
              <label>Width</label>
              <input name="owidth" value={messurments.owidth} onChange={handleInputChange} type="number" placeholder="Width"></input>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={2} md={1} sm={3}>
          <span className="result">{result} m<sup>2</sup></span>
        </Grid>
        <Grid>
          <button onClick={props.handleDeletion} className="delete">Del</button>
        </Grid>
    </Grid>
   ) 
}