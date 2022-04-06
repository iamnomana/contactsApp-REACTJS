import { useState } from "react";

export default function Home() {
  // const [name, setName] = useState("Divine");
  let contacts = [
    { id: 1, name: "Divine Nomana", age: 11, gender: "Male", phone: "0554505635" },
    { id: 2, name: "Kofi Nomana", age: 12, gender: "Male", phone: "0987654321" },
    { id: 3, name: "Gameli Nomana", age: 13, gender: "Male", phone: "0123456789" },
  ];

  const changeName = () => {};
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
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Phone: </label>
              <input type="text" id="" />
            </div>

            <div className="buttons">
              <button type="button" onClick={(e) => null}>
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
