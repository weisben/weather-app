//import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styles from './UI/App.module.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ForecastDisplay from './components/ForecastDisplay';

//const router = createBrowserRouter([]);
const API_KEY = '1b22dc7db30f4d579e1202012232206';
const num_days = 7;

function App() {
  const [data, setData] = useState();

  const searchHandler = async (zip_code) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${zip_code}&days=${num_days}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const new_data = await response.json();
      setData(new_data);
      console.log(data);
    } catch (error) {
      setData(null);
      console.log(error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <SearchBar searchHandler={searchHandler} />
      {!data ? <h2>No data found...</h2> : <ForecastDisplay data={data} />}
    </div>
  );
}

export default App;
