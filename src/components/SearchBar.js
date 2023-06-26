import styles from '../UI/SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({ searchHandler }) {
  const [zipCode, setZipCode] = useState('02043');
  const textChangeHandler = (event) => {
    setZipCode(event.target.value);
  };
  const buttonClickHandler = () => {
    searchHandler(zipCode);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type='text'
        onChange={textChangeHandler}
        value={zipCode}
        placeholder='ZIP code'
      ></input>
      <button onClick={buttonClickHandler}>Get Data</button>
    </div>
  );
}
