import PropTypes from 'prop-types';

import s from './Filter.module.css';

export default function Filter({ onFilterChange }) {
  const handleFilterChange = e => {
    onFilterChange(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          name="filter"
          onChange={handleFilterChange}
          type="text"
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};
