import { useDispatch, useSelector } from "react-redux";
import s from "./App.module.css";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { selectIsLoading } from "../redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />
      {loading && <h2 className={s.load}>Loading...</h2>}
    </div>
  );
};

export default App;
