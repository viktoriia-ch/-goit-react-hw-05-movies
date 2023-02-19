import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
import styles from './movies-search-form.module.css';

const MoviesSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="search"
          type="text"
          placeholder="Enter name of movie..."
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          <IoIosSearch className={styles.icon} />
        </button>
      </form>
    </div>
  );
};

export default MoviesSearchForm;

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
