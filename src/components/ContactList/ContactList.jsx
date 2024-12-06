import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";
import { selectorContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectorContacts);

  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <ul className={s.card}>
        {visibleContacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
