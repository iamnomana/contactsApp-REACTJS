import { useState, useEffect } from "react";

export default function Home() {
  const [contacts, setContacts] = useState(null);
  const [inputs, setInputs] = useState({});
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((inputs) => ({ ...inputs, [name]: value }));
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
    setInputs(contacts[index]);
    setEdit(true);
  };

  useEffect(() => {
    setTimeout(() => {
      // FETCH DATA
      fetch("http://localhost:3001/contacts")
        .then((res) => res.json())
        .then((data) => {
          setContacts(data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
      console.log("fetch");
    }, 2000);
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
    setContacts(newContacts);
  };

  return (
    <>
      <div className="flex md:flex-row mt-5  space-x-20">
        <div className="left-side flex md:flex-col">
          <form>
            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase  text-grey-darkest">Id: </label>
              <input
                className="border py-1 px-3 text-grey-darkest"
                type="text"
                name="id"
                value={inputs.id || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase  text-grey-darkest">Name: </label>
              <input
                className="border py-1 px-3 text-grey-darkest"
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase  text-grey-darkest">Age: </label>
              <input
                className="border py-1 px-3 text-grey-darkest"
                type="text"
                name="age"
                value={inputs.age || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase  text-grey-darkest">Gender: </label>
              <input
                className="border py-1 px-3 text-grey-darkest"
                type="text"
                name="gender"
                value={inputs.gender || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase  text-grey-darkest">Phone: </label>
              <input
                className="border py-1 px-3 text-grey-darkest"
                type="text"
                name="phone"
                value={inputs.phone || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="space-x-3">
              <button
                className="bg-green-800 hover:bg-green-900 text-white py-1 px-2 rounded"
                type="button"
                onClick={() => addContact()}
              >
                Save
              </button>
              <button
                className="bg-red-600 hover:bg-red-900 text-white py-1 px-2 rounded"
                type="button"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        <div className="right-side flex md:flex-col">
          {loading && <h3>Loading Data... Please wait</h3>}
          {contacts && (
            <table className="table-auto">
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
                    <td className="space-x-2">
                      <button
                        className="bg-blue-700 hover:bg-blue-900 text-white py-1 px-2 rounded"
                        onClick={() => editContact(contact.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-700 hover:bg-red-900 text-white py-1 px-2 rounded"
                        onClick={() => deleteContact(contact.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
