// import { useNavigation } from '@react-navigation/native';
// import Register from './Register';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email,setEmail]=useState("")
  
  const handleLogin = async()=>{
    try {
      const res = await fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username,email,password }),
      });
      console.log("heelelo", res.status);
      const data = await res.json();
      if (res.status == 201) {
        navigate("/dashboard");
      }
    } catch (err) {
      return err;
    }
    setUsername('')
    setEmail('')
    setPassword('')
  }
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
          <label style={{ justifyContent: "flex-start" }}>Username/Email</label>
          <input
            style={{ height: 30, width: 400, marginBottom: 20 }}
            placeholder="enter your username/email"
            value={username}
            onChange={(e)=>{setUsername(e.target.value);setEmail(e.target.value)}}
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
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button
          style={{ marginTop: 20, height: 30, width: 100 }}
          onClick={() => {
           handleLogin()
          }}
        >
          Login
        </button>
        <text>
          don't have an account!please{" "}
          <a onClick={() => navigate("/Register")} href={"/Register"}>
            Register
          </a>
        </text>
      </div>
    </>
  );
}
export default Login;
