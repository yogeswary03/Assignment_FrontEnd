import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [msg, setMsg] = useState(null);
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    designation: "",
    salary: "",
  });

  const handlePut = async () => {
    try {
      const resp = await axios.put(
        `https://assignment-backend-3-sp1e.onrender.com/employees/${employee.id}`,
        employee
      );
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error updating employee");
      console.log(e);
    }
  };

  return (
    <>
      <h1>Update Employee</h1>
      <input
        type="number"
        placeholder="Employee ID"
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
      <button onClick={handlePut}>Update</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Update;
