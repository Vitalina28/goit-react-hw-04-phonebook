import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <ul className="list">
      {visibleContacts.map(visible => (
        <ContactItem key={visible.id} visible={visible} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
