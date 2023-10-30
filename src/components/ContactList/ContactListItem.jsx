// import { deleteContact } from 'redux/contactsSlice';
// import css from './ContactListItem.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getFilter } from 'redux/selectors';

// export const ContactListItem = () => {

//     const dispatch = useDispatch();
//     const contacts = useSelector(getContacts);
//     const filter = useSelector(getFilter);

//     return (
//         <>
//             <p><span className={css.itemName}>Name: </span>{name}</p>
//             <p><span className={css.itemName}>Number: </span>{number}</p>
//             <button className={css.deleteButton}
//                 type="button"
//                 onClick={() => dispatch(deleteContact(id))}>
//                 Delete
//             </button>
//         </>
// )};