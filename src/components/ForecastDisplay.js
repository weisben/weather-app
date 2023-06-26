import ForecastDayHourly from './ForecastDayHourly';
import ForecastWeek from './ForecastWeek';
import styles from '../UI/ForecastDisplay.module.css';
import ForecastToday from './ForecastToday';

export default function ForecastDisplay({ data }) {
  console.log(data);
  const location_name = `${data.location.name}, ${data.location.region}`;
  const weekData = data.forecast.forecastday;
  const dayData = weekData[0];

  return (
    <div className={styles.container}>
      <h2>{location_name}</h2>
      <ForecastToday currentData={data.current} />
      <ForecastDayHourly hourData={dayData.hour} />
      <ForecastWeek weekData={weekData} />
    </div>
  );
}
