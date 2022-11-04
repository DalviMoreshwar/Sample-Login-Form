import { useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || password === "") return null;
    alert(userName, password);
  };
  return (
    <div className="login-card">
      <h2>Login Page</h2>
      <h3>Enter your credentials</h3>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <a href="/">Forgot your password?</a>
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default LoginPage;
