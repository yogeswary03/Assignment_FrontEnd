import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [msg, setMsg] = useState(null);
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    designation: "",
    salary: "",
  });

  const handlePost = async () => {
    try {
      const resp = await axios.post("http://localhost:3000/employees", employee);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error adding employee");
      console.log(e);
    }
  };

  return (
    <>
      <h1>Add New Employee</h1>
      <input
        type="text"
        placeholder="ID"
        value={employee.id}
        onChange={(e) => setEmployee({ ...employee, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department"
        value={employee.department}
        onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
      />
      <input
        type="text"
        placeholder="Designation"
        value={employee.designation}
        onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
      />
      <input
        type="number"
        placeholder="Salary"
        value={employee.salary}
        onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
      />
      <button onClick={handlePost}>Add</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Add;
