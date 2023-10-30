import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: formValues.name,
      number: formValues.number,
    };

    if (contacts.find((contact) => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    setFormValues(initialValues); // Reset the form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name: </label>
      <input className={css.formInput}
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />
      <label>Number: </label>
      <input className={css.formInput}
        type="tel"
        name="number"
        value={formValues.number}
        onChange={handleInputChange}
        required
      />
      <button className={css.saveButton} type="submit">Save contact</button>
    </form>
  );
};
