import { useState } from "react";

export default function Home() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Divine Nomana", age: 11, gender: "Male", phone: "0554505635" },
    { id: 2, name: "Kofi Nomana", age: 12, gender: "Male", phone: "0987654321" },
    { id: 3, name: "Gameli Nomana", age: 13, gender: "Male", phone: "0123456789" },
  ]);

  const addContact = () => {
    let id = contacts.length + 1;
    let contact = { id: id, name: "Dora", age: 4, phone: "328394" + id, gender: "Female" };

    setContacts((contacts) => [...contacts, contact]);
  };

  return (
    <>
      <div className="home">
        <div className="left-side">
          <form>
            <div>
              <label htmlFor="">Id: </label>
              <input type="text" id="" />
            </div>
            <div>
              <label htmlFor="">Name: </label>
              <input type="text" id="" />
            </div>
            <div>
              <label htmlFor="">Age: </label>
              <input type="text" id="" />
            </div>
            <div>
              <label htmlFor="">Gender: </label>
              <select id="" style={{ width: "50%" }}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Phone: </label>
              <input type="text" id="" />
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
                    <button>Edit</button>
                    <button>Delete</button>
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
