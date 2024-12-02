function Login() {
  return (
    <>
    <div style={{margin:50, gap:30}}>
      <div style={{display:'flex', flexDirection:"column", justifyContent:'flex-start', alignItems:"flex-start", gap:20}}>
        <label style={{justifyContent:"flex-start"}}>User name</label>
        <input style={{ height:30, width:400}}placeholder="enter username" />
      </div>
      </div>
    </>
  );
}
export default Login;
