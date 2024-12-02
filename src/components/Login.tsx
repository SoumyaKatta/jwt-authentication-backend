function Login() {
  return (
    <>
    <div style={{margin:50,display:'flex', flexDirection:"column",gap:20}}>
      <div style={{display:'flex', flexDirection:"column", justifyContent:'flex-start', alignItems:"flex-start", gap:20}}>
        <label style={{justifyContent:"flex-start"}}>User name</label>
        <input style={{ height:30, width:400, marginBottom:20}}placeholder="enter username" />
      </div>
      <div style={{display:'flex', flexDirection:"column", justifyContent:'flex-start', alignItems:"flex-start", gap:20}}>
        <label style={{justifyContent:"flex-start"}}>Password</label>
        <input style={{ height:30, width:400}}placeholder="enter password" />
      </div>
      <button style={{ marginTop:20, height:30, width:100}}>Login</button>
      </div>
    </>
  );
}
export default Login;
