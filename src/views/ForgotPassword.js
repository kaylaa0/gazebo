import logo from "../assets/images/logos/logo_full.png";
import "./ForgotPassword.css";
import Button from "../components/HomePageButton";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function ForgotPasswordPage() {
  const history = useHistory();

  const [userName, setUserName] = useState("");

  const setVarIdentifier = (event) => {
    setUserName(event.target.value);
  };

  const CheckIdentifier = async (event) => {
    event.preventDefault();
    const body = {
      username: userName,
    };

    console.log(body);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/password",
        body
      );
      console.log(response);

      if (response.status <= 300) {
        history.push("/forgotPassword/check");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="ForgotPasswordPage">
      <header className="ForgotPasswordPage-header">
        <a href="/">
          <img src={logo} className="ForgotPasswordPage-logo" alt="logo" />
        </a>
      </header>
      <body className="ForgotPasswordPage-body">
        <div className="ShadedBox">
          <br />
          <br />
          <div className="LockIcon">lock</div>
          <div className="SmallerTitleText">
            <p>
              <br />
              <br />
              Enter your username to find your account.
              <br />
              <br />
            </p>
          </div>
          <div className="InputsDiv">
            <input
              onChange={setVarIdentifier}
              className="InputBar"
              type="text"
              id="account-info"
              placeholder="Username or E-mail Address"
              name="s"
            />
          </div>
          <div className="ButtonDiv">
            <Link class="nav-link" to="/login">
              <Button theme="passwordForgotCancelButton">Cancel</Button>
            </Link>
            <Link class="nav-link" to="/forgotPassword/check">
              <Button
                theme="passwordForgotCheckAccountButton"
                onClick={CheckIdentifier}
              >
                Check Account
              </Button>
            </Link>
            <br />
            <br />
            <br />
          </div>
        </div>
      </body>
    </div>
  );
}

export default ForgotPasswordPage;
