import React, { useEffect, useState } from "react";
import api from "../service/UserService";
import "../styles/list.css";

function List() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const deleteUser = async (id) => {
    await api.delete("/" + id.toString());
    getUsers();
  };

  const getUser = async (id) => {
    try {
      const response = await api.get("/" + id.toString());
      setUser(response.data);
      // Set form values with the user data
      setName(response.data.firstName);
      setSurname(response.data.lastName);
      setWeight(response.data.kgValue);
      setHeight(response.data.lengthValue);
    } catch (error) {
      console.error("Error fetching user:", error);
      console.log("API response:", error.response); // Log the API response
    }
  };
  
  const updateUser = async (id) => {
    let updatedUser = { firstName: name, lastName: surname, kgValue: weight, lengthValue: height };
    await api.put("/" + id.toString(), updatedUser);
  
  };
  

  const getUsers = async () => {
    try {
      const response = await api.get("");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Kilo</th>
            <th>Boy</th>
            <th>Aksiyonlar</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((u, i) => (
              <tr key={i}>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.kgValue}</td>
                <td>{u.lengthValue}</td>
                <td className="table-buttons">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => getUser(u.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Güncelleme
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="uname">Adınız:</label>
                <input
                  type="text"
                  className="input_class"
                  name="uname"
                  id="uname"
                  placeholder="Adınız ..."
                  required
                  autoFocus
                  onChange={handleName}
                  title="Adınızı giriniz !"
                  value={name}
                />
              </div>
              <div>
                <label htmlFor="usurname">Soyadınız:</label>
                <input
                  type="text"
                  className="input_class"
                  name="usurname"
                  id="usurname"
                  placeholder="Soyadınız ..."
                  required
                  onChange={handleSurname}
                  title="Soyadınızı giriniz !"
                  value={surname}
                />
              </div>
              <div>
                <label htmlFor="uweight">(kg)Kilonuz:</label>
                <input
                  type="text"
                  className="input_class"
                  name="uweight"
                  id="uweight"
                  placeholder="Kilonuz ..."
                  required
                  onChange={handleWeight}
                  title="Kilonuzu giriniz !"
                  value={weight}
                />
              </div>
              <div>
                <label htmlFor="ulength">(cm)Boyunuz:</label>
                <input
                  type="text"
                  className="input_class"
                  name="ulength"
                  id="ulength"
                  placeholder="Boyunuz ..."
                  required
                  onChange={handleHeight}
                  title="Boyunuzu giriniz !"
                  value={height}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => updateUser(user.id)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
