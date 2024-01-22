import css from './ContactItem.module.css';

const ContactItem = ({ visible, onDelete }) => {
  return (
    <li className={css.li}>
      {visible.name}: {visible.number}
      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(visible.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
