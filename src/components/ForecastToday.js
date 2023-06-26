import styles from '../UI/ForecastToday.module.css';

export default function ForecastToday({ currentData }) {
  return (
    <div>
      <h1>{currentData.temp_f + '°'}</h1>
      <h2>Feels like {currentData.feelslike_f}</h2>
    </div>
  );
}
