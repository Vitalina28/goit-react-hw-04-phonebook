import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ contacts, addUserName }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };
  // console.log(addUserName);
  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    addUserName({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
