import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';


export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filteredContacts = contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id} className={css.listItem}>
                    <p><span className={css.itemName}>Name: </span>{name}</p>
                    <p><span className={css.itemName}>Number: </span>{number}</p>
                    <button
                        className={css.deleteButton}
                        type="button"
                        onClick={() => handleDelete(id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};
