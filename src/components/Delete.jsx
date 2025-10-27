import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [msg, setMsg] = useState(null);
  const [id, setId] = useState("");

  const handleDelete = async () => {
    try {
      const resp = await axios.delete(`http://localhost:3000/employees/${id}`);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error deleting employee");
      console.log(e);
    }
  };

  return (
    <>
      <h1>Delete Employee</h1>
      <input
        type="text"
        placeholder="Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Delete;
