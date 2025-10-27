import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  const handleGet = async () => {
    try {
      const resp = await axios.get("https://assignment-backend-1-5g8g.onrender.com/employees");
      setData(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <h1>Employee List</h1>
      {data.length > 0 ? (
        data.map((d) => (
          <h3 key={d.id}>
            ID: {d.id} — {d.name} | {d.department} | {d.designation} | ₹{d.salary}
          </h3>
        ))
      ) : (
        <h3>No employees found</h3>
      )}
    </>
  );
}

export default Home;
