// import { useNavigation } from '@react-navigation/native';
// import Register from './Register';
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
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
          />
        </div>
        <button style={{ marginTop: 20, height: 30, width: 100 }}>Login</button>
        <text>
          don't have an account!please <a onClick={()=> navigate('/Register')} href={'/Register'}>Register</a>
        </text>
      </div>
    </>
  );
}
export default Login;
