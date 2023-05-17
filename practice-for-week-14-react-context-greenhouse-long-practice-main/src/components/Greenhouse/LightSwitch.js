import './LightSwitch.css';
import { useThemeContext } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useThemeContext();

  const handleChange = light => {
    return(e) => {
      if (light === 'day') {
        setThemeName('night')
      } else {
        setThemeName('day')
      }
    }
  }

  return (
    // <div className={`light-switch day`}>
    <div className={`light-switch ${themeName}`}>
      {/* <div className="on" >DAY</div>
      <div className="off" >NIGHT</div> */}
      <div className="on" onClick={handleChange(themeName)}>DAY</div>
      <div className="off" onClick={handleChange(themeName)}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;