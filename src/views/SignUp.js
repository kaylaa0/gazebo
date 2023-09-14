import logo from "../assets/images/logos/logo_full.png";
import "./SignUp.css";
import Button from "../components/HomePageButton";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const setVariableUserName = (event) => {
    setUserName(event.target.value);
  };

  const setVariablePassword = (event) => {
    setPassword(event.target.value);
  };

  const setVariableEmail = (event) => {
    setEmail(event.target.value);
  };

  const setVariablePasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
  };

  const checkData = async () => {
    if (password === passwordCheck) {
      await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          email: email,
          password: password,
        }),
      }).then((res) => {
        console.log(res.json());
      });
    }
  };

  return (
    <div className="SignUp">
      <header className="SignUp-header">
        <a href="/">
          <img src={logo} className="SignUp-logo" alt="logo" />
        </a>
      </header>
      <body className="SignUp-body">
        <div className="ShadedBox">
          <p>Create Your Free Account</p>
          <div className="InputsDiv">
            <input
              onChange={setVariableUserName}
              className="InputBar"
              type="text"
              id="user-name"
              placeholder="User Name"
              name="s"
            />
            <input
              onChange={setVariableEmail}
              className="InputBar"
              type="text"
              id="mail-address"
              placeholder="E-mail Address"
              name="s"
            />
            <input
              onChange={setVariablePassword}
              className="InputBar"
              type="password"
              id="password"
              placeholder="Password"
              name="s"
            />
            <input
              onChange={setVariablePasswordCheck}
              className="InputBar"
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              name="s"
            />
          </div>
          <div className="ButtonDiv">
            <Button onClick={checkData} theme="signUpPageConfirmButton">
              Create Account
            </Button>
          </div>
          <div className="ExistingUserDiv">
            Existing User?{" "}
            <Link class="nav-link" to="/login">
              Sign In
            </Link>
            <br /> <br />
          </div>
        </div>
      </body>
    </div>
  );
}

export default SignUpPage;
