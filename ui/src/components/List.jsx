import React, { useEffect, useState } from "react";
import api from "../service/UserService";
import "../styles/list.css";
import { useTranslation } from "react-i18next";

function List() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const { t, i18n } = useTranslation();

  const deleteUser = async (id) => {
    await api.delete("/" + id.toString());
    getUsers();
  };

  const getUser = async (id) => {
    try {
      const response = await api.get("/" + id.toString());
      setUser(response.data);
      setName(response.data.firstName);
      setSurname(response.data.lastName);
      setWeight(response.data.kgValue);
      setHeight(response.data.lengthValue);
    } catch (error) {
      console.error("Error fetching user:", error);
      console.log("API response:", error.response);
    }
  };

  const updateUser = async (id) => {
    let updatedUser = {
      firstName: name,
      lastName: surname,
      kgValue: weight,
      lengthValue: height,
    };
    await api.put("/" + id.toString(), updatedUser);

    getUsers();
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
    <div className="list-container">
      <h1>{t("users")}</h1>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>{t("name2")}</th>
              <th>{t("surname2")}</th>
              <th>{t("weight2")}</th>
              <th>{t("height2")}</th>
              <th>{t("action")}</th>
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
                      {t("del")}
                    </button>
                    <button
                      className="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => getUser(u.id)}
                    >
                      {t("upt")}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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
              {t("upt2")}
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
                <label htmlFor="uname">{t("name")}</label>
                <input
                  type="text"
                  className="input_class"
                  name="uname"
                  id="uname"
                  required
                  autoFocus
                  onChange={handleName}
                  value={name}
                />
              </div>
              <div>
                <label htmlFor="usurname">{t("surname")}</label>
                <input
                  type="text"
                  className="input_class"
                  name="usurname"
                  id="usurname"
                  required
                  onChange={handleSurname}
                  value={surname}
                />
              </div>
              <div>
                <label htmlFor="uweight">{t("weight")}</label>
                <input
                  type="text"
                  className="input_class"
                  name="uweight"
                  id="uweight"
                  required
                  onChange={handleWeight}
                  value={weight}
                />
              </div>
              <div>
                <label htmlFor="ulength">{t("height")}</label>
                <input
                  type="text"
                  className="input_class"
                  name="ulength"
                  id="ulength"
                  required
                  onChange={handleHeight}
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
                {t("close")}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => updateUser(user.id)}
                data-bs-dismiss="modal"
              >
                {t("save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
