import logo from "../assets/images/logos/logo_full.png";
import "./ForgotPasswordCheck.css";
import Button from "../components/HomePageButton";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function ForgotPasswordCheckPage() {
  const history = useHistory();

  const [code, setCode] = useState("");

  const changeOnCode = (event) => {
    setCode(event.target.value);
  };

  const CheckCode = async (event) => {
    event.preventDefault();
    const body = {
      username: code,
    };

    console.log(body);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/passwordCheck",
        body
      );
      console.log(response);

      if (response.status <= 300) {
        history.push("/forgotPassword/reset");
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
              <br />
              Verification code has been sent to your mail address.
              <br />
              <br />
            </p>
          </div>
          <div className="InputsDivCheck">
            <input
              onChange={changeOnCode}
              className="InputBarCheck"
              type="text"
              id="account-info"
              placeholder="Enter Code"
              name="s"
            />
            <Link class="nav-link" to="/forgotPassword/reset">
              <Button theme="homepageSignUpButton" onClick={CheckCode}>
                Submit
              </Button>
            </Link>
          </div>
          <div className="BottomTextDivCheck">
            <br />
            <br />
            Not received?{" "}
            <Link class="nav-link" to="/forgotPassword">
              Send Again
            </Link>
            <br /> <br />
            <br /> <br />
            <br /> <br />
          </div>
        </div>
      </body>
    </div>
  );
}

export default ForgotPasswordCheckPage;
