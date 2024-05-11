


import './assets/css/login.css';

const Login = () => {
  

  return (
    <div className="bg">
      <div className="img">
      <form  className="box">
        <div >
          <div className="content">
          
            <h1 className="text">Login</h1>
            <input type="number" placeholder="ID Number" name="IDNo"  /><br />
            <input type="password" placeholder="Password" name="password"  />
            <div className="forget">
              <div className="check">
                <input type="checkbox" /><span>Remember me</span>
              </div>
              <a href="http://" className="pass">Forget Password ?</a>
            </div>
            <button type="submit">Login</button>
            
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
