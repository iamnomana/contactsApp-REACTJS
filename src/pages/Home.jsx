import { useState, useEffect } from "react";

export default function Home() {
  const [contacts, setContacts] = useState([]);

  const [inputs, setInputs] = useState({});
  const [edit, setEdit] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const addContact = () => {
    if (edit) {
      const index = contacts.findIndex((val) => val.id === inputs.id);

      contacts[index] = inputs;
      setContacts(contacts);
      setEdit(false);
    } else {
      setContacts((contacts) => [...contacts, inputs]);
    }

    clearInput();
  };

  const editContact = (id) => {
    const index = contacts.findIndex((val) => val.id === id);

    console.log(index);
    // return;
    setInputs(contacts[index]);
    setEdit(true);
  };

  useEffect(() => {
    fetch("http://localhost:3001/contacts").then((res) => {
      console.log(res.json());
    });
    console.log("useEffect");

    // return () => {
    //   second
    // }
  }, []);

  const clearInput = () => {
    setInputs({});
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((val) => val.id !== id);
    console.log(newContacts);
    setContacts(newContacts);
  };

  return (
    <>
      <div className="home">
        <div className="left-side">
          <form>
            <div>
              <label>Id: </label>
              <input
                type="text"
                name="id"
                value={inputs.id || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div>
              <label>Age: </label>
              <input
                type="text"
                name="age"
                value={inputs.age || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div>
              <label>Gender: </label>
              <input
                type="text"
                name="gender"
                value={inputs.gender || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div>
              <label>Phone: </label>
              <input
                type="text"
                name="phone"
                value={inputs.phone || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="buttons">
              <button type="button" onClick={() => addContact()}>
                Save
              </button>
              <button type="button">Clear</button>
            </div>
          </form>
        </div>

        <div className="right-side">
          <table className="contactList">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.age}</td>
                  <td>{contact.gender}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button onClick={() => editContact(contact.id)}>Edit</button>
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
