
import './assets/css/login.css';


const Login = () => {
  
  
  return (
    <div className="bg">
      <div className="img">
        <div className="box">
          <div className="content">
            <h1 className="text">Login</h1>
            <input type="email" placeholder="Email ID" /><br />
            <input type="password" placeholder="Password" />
            <div className="forget">
              <div className="check">
                <input type="checkbox" /><span>Remember me</span>
              </div>
              {/* <p></p> */}
              <a href="http://" className="pass">Forget Password ?</a>
            </div>
            <button>Login</button>
            {/* <p>Don&apos;t have an account ? <span>Register</span></p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
