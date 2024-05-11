import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './assets/css/login.css';

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    IDNo: "",
    password: "",
  });
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      // Validation for ID Number
      if (!user.IDNo || !user.IDNo.trim()) {
        return swal("Error", "ID Number is required", "error");
      }
      if (!/^\d{10}$/.test(user.IDNo.trim())) {
        return swal("Error", "ID Number must be 10 digits", "error");
      }

      // Validation for Password
      if (!user.password || !user.password.trim()) {
        return swal("Error", "Password is required", "error");
      }
      if (user.password.trim().length < 8) {
        return swal("Error", "Password must be at least 8 characters long", "error");
      }

      const response = await axios.post("http://localhost:5001/admin/login", user);
      console.log("successful login");
      localStorage.setItem("authToken", response.data.authToken);
      setLoginUser(response.data.authToken);
      history('/admin');
    } catch (error) {
      console.error("Login error:", error);
      swal("Error", error.response?.data.error || "An error occurred", "error");
    }
  };

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:5001/admin/checklogin', {
          headers: {
            'auth-token': authToken,
          },
        });

        // If the user is logged in, update the state accordingly
        if (response.data.isLoggedIn) {
          setLoginUser(authToken);
          history('/admin');
        }

      } catch (error) {
        console.error('Fetch login status error:', error.message);
      }
    };

    fetchLoginStatus();
  }, []);

  return (
    <div className="bg">
      <div className="img">
      <form onSubmit={handleLogin} className="box">
        <div >
          <div className="content">
          
            <h1 className="text">Login</h1>
            <input type="number" placeholder="ID Number" name="IDNo" value={user.IDNo} onChange={handleChange} /><br />
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
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
