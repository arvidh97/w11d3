import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useThemeContext} from '../../context/ThemeContext';

function Greenhouse() {

  const {themeName} = useThemeContext();

  if (themeName === 'day') {
  return (
    <section>
      <img  className='greenhouse-img'
            src={dayImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  ); }
  else {
    return (
      <section>
        <img  className='greenhouse-img'
              src={nightImage}
              alt='greenhouse' 
        />
        <LightSwitch />
        <ClimateStats />
      </section>
  )}
}

export default Greenhouse;