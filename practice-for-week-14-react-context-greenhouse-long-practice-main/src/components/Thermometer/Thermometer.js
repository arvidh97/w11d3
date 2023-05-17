import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimateContext } from "../../context/ClimateContext";
import { useEffect, useState } from "react";


function Thermometer() {
  const { temperature, setTemperature } = useClimateContext();
  const [desiredTemp, setDesiredTemp] = useState(temperature)
  
  function changeTemp() {
      if (desiredTemp > temperature) {
          setTemperature(temperature + 1) // harjit's way
      }
      if (desiredTemp < temperature) {
          setTemperature(prevTemp => prevTemp-1)  // arvid's way
      }
  }

  useEffect(() => {
      const interval = setInterval(changeTemp, 200);
      return () => {
        clearInterval(interval)
      }
    }, [temperature, desiredTemp])  // it seems like we don't need a dependency array. it still works fine without it

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={desiredTemp}
        onAfterChange={(val) => {setDesiredTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={-120}
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