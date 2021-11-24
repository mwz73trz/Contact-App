import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContacts";
import ContactList from "./components/ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "John Doe",
      email: "john@gmail.com",
    },
    {
      id: "2",
      name: "Hannah Zura",
      email: "hannah@aol.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
