import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimateContext } from "../../context/ClimateContext";
import { useEffect, useState } from "react";


function Thermometer() {
  const { temperature, setTemperature } = useClimateContext();
  const [desiredTemp, setDesiredTemp] = useState(temperature)
  
  function changeTemp(temperature, desiredTemp) {
      if (desiredTemp > temperature) {
        while (temperature < desiredTemp) {
          setTemperature(prevTemp => prevTemp+1)
        }
      }
      else {
        while (temperature > desiredTemp) {
          setTemperature(prevTemp => prevTemp-1)
        }
      }
  }

  useEffect(() => {
      setTimeout(changeTemp(temperature, desiredTemp), 1000)
    }, [desiredTemp])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {setDesiredTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;