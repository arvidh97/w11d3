import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimateContext } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Hygrometer() {

  const { humidity, setHumidity } = useClimateContext();
  const [desiredHumidity, setDesiredHumidity] = useState(humidity)
  
  function changeHumidity() {
      if (desiredHumidity > humidity) {
          setHumidity(humidity + 1) // harjit's way
      }
      if (desiredHumidity < humidity) {
          setHumidity(prevHumidity => prevHumidity-1)  // arvid's way
      }
  }

  useEffect(() => {
      const interval = setInterval(changeHumidity, 1000);
      return () => {
        clearInterval(interval)
      }
    }, [humidity, desiredHumidity])  // it seems like we don't need a dependency array. it still works fine without it


  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desiredHumidity}
        onAfterChange={(val) => {setDesiredHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;