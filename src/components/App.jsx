// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";
import { useEffect } from "react";
import { fetchContacts } from "redux/contactsOperations";

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm/>
      </Section>

      <Section title="Contacts">
          <Filter />
        
        <ContactList />
      </Section>
    </>
  );
};

 