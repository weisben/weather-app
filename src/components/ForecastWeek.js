import styles from '../UI/ForecastWeek.module.css';
import ForecastDayCard from './ForecastDayCard';

export default function ForecastWeek({ weekData }) {
  const formatDayData = (dayData) => {
    return (
      <li
        className={styles.item}
        key={dayData.date}
      >
        <ForecastDayCard
          className={styles.dayCard}
          dayData={dayData}
        />
      </li>
    );
  };

  return (
    <ul className={styles.list}>
      {weekData.map((dayData) => formatDayData(dayData))}
    </ul>
  );
}
