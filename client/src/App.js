import { useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "me@example.com", password: "123456" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    alert('Please contact admin.')
  };
  return (
    <div className="logindiv">
      <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" name="Username" value={username} onChange={(e) => setusername(e.target.value)}  placeholder="Email ID" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="Password" onChange={(e) => setpassword(e.target.value)}/>
          </div>
          <button className="primary">Login</button>
          <div className="forgotpassworddiv">
            <button className="secondary" onClick={handleClick}>
            Forgot Password
          </button>
          </div>
          <div className="forgotpassworddiv">
          <button className="secondary" onClick={handleClick}>
            Register
          </button>
        </div>
        </form>
    </div>
  );
};
export default App;
