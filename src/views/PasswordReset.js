import logo from "../assets/images/logos/logo_full.png";
import "./PasswordReset.css";
import Button from "../components/HomePageButton";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function PasswordResetPage() {
  const history = useHistory();

  const [password, setPassword] = useState("");

  const changeOnPassword = (event) => {
    setPassword(event.target.value);
  };

  const PasswordReset = async (event) => {
    event.preventDefault();
    const body = {
      username: password,
    };

    console.log(body);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/passwordReset",
        body
      );
      console.log(response);

      if (response.status <= 300) {
        history.push("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="ForgotPasswordCheckPage">
      <header className="ForgotPasswordCheckPage-header">
        <a href="/">
          <img src={logo} className="ForgotPasswordCheckPage-logo" alt="logo" />
        </a>
      </header>
      <body className="ForgotPasswordCheckPage-body">
        <div className="ShadedBox">
          <br />
          <br />
          <div className="LockIcon">lock</div>
          <div className="SmallerTitleText">
            <p>
              <br />
              Reset your password.
              <br />
              <br />
            </p>
          </div>
          <div className="InputsDiv">
            <input
              onChange={changeOnPassword}
              className="InputBar"
              type="password"
              id="new-password"
              placeholder="New password"
              name="s"
            />
            <input
              className="InputBar"
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
              name="s"
            />
          </div>
          <div className="ButtonDiv">
            <Link class="nav-link" to="/login">
              <Button theme="passwordForgotCancelButton">Cancel</Button>
            </Link>
            <Button
              theme="passwordForgotCheckAccountButton"
              onClick={PasswordReset}
            >
              Reset Password
            </Button>
          </div>
          <br />
          <br />
        </div>
      </body>
    </div>
  );
}

export default PasswordResetPage;
