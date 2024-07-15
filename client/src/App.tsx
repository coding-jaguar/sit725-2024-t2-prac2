import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({ a: 0, b: 0 });
  const [op, setOp] = useState("pending");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const a = (e.target as HTMLFormElement).a.value;
    const b = (e.target as HTMLFormElement).b.value;
    const config = {
      method: "post",
      url: "http://localhost:5000/add",
      data: {
        a: a,
        b: b,
      },
    };

    axios(config)
      .then((response) => {
        console.log("Response:", response.data);
        setOp(response.data["result"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setOp("pending");
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <div>
          <label htmlFor="a">Enter First Number</label>
          <input
            type="number"
            id="a"
            name="a"
            value={formData.a}
            onChange={handleChange}
          />
        </div>

        <div style={{ margin: "50px auto" }}>
          <label htmlFor="b">Enter Second Number</label>
          <input
            type="number"
            id="b"
            name="b"
            value={formData.b}
            onChange={handleChange}
          />
        </div>

        <button style={{ padding: "4 6" }}> Add</button>
      </form>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>{op}</h1>
      </div>
    </>
  );
}

export default App;
