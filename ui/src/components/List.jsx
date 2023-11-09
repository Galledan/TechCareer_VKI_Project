import React, { useEffect, useState } from "react";
import api from "../service/UserService";

function List() {

  const [users, setUsers] = useState();

  const getUsers = async (i, e) => {
    await api.get("").then((res) => {
        setUsers(res.data)
    });
  };

  useEffect(() => {
    getUsers()
  }, [])




  return <div>
    {users && users.map((u,i) => (
        <div key={i}>
            <p>{u.firstName}</p>
            <p>{u.lastName}</p>
            <p>{u.kgValue}</p>
            <p>{u.lengthValue}</p>
        </div>
    ))}

  </div>;
}

export default List;
