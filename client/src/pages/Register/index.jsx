import "./styles.css";
import { useRef } from "react";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">Find new events around you</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
            />
            <input placeholder="Email" ref={email} className="loginInput" />
            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
            />
            <input
              placeholder="Confirm Password"
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
