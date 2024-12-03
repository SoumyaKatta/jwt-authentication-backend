/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (username: any, email: any, password: any) => {
    try {
      const res = await fetch(`http://localhost:4000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      console.log("heelelo", res.status);
      const data = await res.json();
      if (res.status == 201) {
        navigate("/");
      }
    } catch (err) {
      return err;
    }
  };
  return (
    <>
      <div
        style={{
          margin: 50,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 20,
          }}
        >
          <label style={{ justifyContent: "flex-start" }}>User name</label>
          <input
            style={{ height: 30, width: 400, marginBottom: 20 }}
            placeholder="enter username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 20,
          }}
        >
          <label style={{ justifyContent: "flex-start" }}>Email</label>
          <input
            style={{ height: 30, width: 400 }}
            placeholder="enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 20,
          }}
        >
          <label style={{ justifyContent: "flex-start" }}>Password</label>
          <input
            style={{ height: 30, width: 400 }}
            placeholder="enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          style={{ marginTop: 20, height: 30, width: 100 }}
          onClick={() => handleRegister(username, email, password)}
        >
          Register
        </button>
        <text>
          Already have an account!please <a href={"/"}>login</a>
        </text>
      </div>
    </>
  );
}
export default Register;
