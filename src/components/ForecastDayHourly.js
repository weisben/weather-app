import styles from '../UI/ForecastDayHourly.module.css';

export default function ForecastDayHourly({ hourData }) {
  const currentHour = new Date().getHours() + '';

  const formatHourData = (hourObj) => {
    const hour = hourObj.time.slice(-5, -3);
    const temp = Math.round(hourObj.temp_f) + '°';
    return (
      <li
        className={styles.item}
        id={hour === currentHour ? styles['current'] : null}
        key={hour}
      >
        {hour}
        <img
          className={styles.weatherIcon}
          src={hourObj.condition.icon}
          alt={'weather-icon'}
        ></img>
        {temp}
      </li>
    );
  };

  return (
    <ul className={styles.list}>
      {hourData.map((hourObj) => formatHourData(hourObj))}
    </ul>
  );
}
