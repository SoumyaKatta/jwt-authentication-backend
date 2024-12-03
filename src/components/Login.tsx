// import { useNavigation } from '@react-navigation/native';
// import Register from './Register';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleLogin = async()=>{
    
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
          <label style={{ justifyContent: "flex-start" }}>User name</label>
          <input
            style={{ height: 30, width: 400, marginBottom: 20 }}
            placeholder="enter username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
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
            console.log("You clicked me!");
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
