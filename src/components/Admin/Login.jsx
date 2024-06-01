import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './assets/css/login.css';
const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post('https://forensixplore-backend-production.up.railway.app/admin/login', data);
      const { authToken } = response.data;
      console.log("Success");
      localStorage.setItem('authToken', authToken);
      navigate('/admin');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || 'Login failed');
      } else {
        setError('Something went wrong');
      }
    }
  };

  return (
    <div className="bg">
      <div className="img">
        <form className="box" onSubmit={handleSubmit}>
          <div className="content">
            <h1 className="text">Login</h1>
            <input type="number" placeholder="ID Number" name="ID_NO" /><br />
            <input type="password" placeholder="Password" name="password" />
            <div className="forget">
              <div className="check">
                <input type="checkbox" /><span>Remember me</span>
              </div>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
