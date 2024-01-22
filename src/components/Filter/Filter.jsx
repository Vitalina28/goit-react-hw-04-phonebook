import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
