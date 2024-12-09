import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";
import { selectFilteredContactsMemo } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContactsMemo);

  return (
    <div className={s.wrapper}>
      <ul className={s.card}>
        {contacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
