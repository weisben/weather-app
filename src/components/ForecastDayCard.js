import styles from '../UI/ForecastDayCard.module.css';

export default function ForecastDayCard({ dayData }) {
  const date = formatDate(dayData.date);
  const weather_img = dayData.day.condition.icon;
  const condition_text = dayData.day.condition.text;
  const avg_temp = dayData.day.avgtemp_f + '°';
  return (
    <div className={styles.dayContainer}>
      <p className={styles.date}>{date}</p>
      <p className={styles.temp}>{avg_temp}</p>
      <img
        className={styles.conditionImage}
        src={weather_img}
        alt={'weather-icon'}
      ></img>
      <p className={styles.conditionText}>{condition_text}</p>
    </div>
  );
}

// Date from YYYY-MM-DD to MMM DD
function formatDate(date) {
  const monthNum = date.slice(5, 7);
  const dayNum = date.slice(8);
  let monthString;
  switch (monthNum) {
    case '01':
      monthString = 'Jan';
      break;
    case '02':
      monthString = 'Feb';
      break;
    case '03':
      monthString = 'Mar';
      break;
    case '04':
      monthString = 'Apr';
      break;
    case '05':
      monthString = 'May';
      break;
    case '06':
      monthString = 'Jun';
      break;
    case '07':
      monthString = 'Jul';
      break;
    case '08':
      monthString = 'Aug';
      break;
    case '09':
      monthString = 'Sep';
      break;
    case '10':
      monthString = 'Oct';
      break;
    case '11':
      monthString = 'Nov';
      break;
    case '12':
      monthString = 'Dec';
      break;
    default:
      monthString = 'Error';
  }
  return `${monthString} ${dayNum}`;
}
