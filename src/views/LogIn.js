import logo from "../assets/images/logos/logo_full.png";
import "./LogIn.css";
import Button from "../components/HomePageButton";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LogInPage() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("#");

  const onClickSignUp = (event) => {
    event.preventDefault();
    const body = {
      username: userName,
      password: password,
    };
    axios.post("http://localhost:8080/api/auth/signin", body).then((res) => {
      if (res.status === 200) {
        console.log(res.status);
        const token = res.data.tokenType + " " + res.data.accesToken;
        localStorage.setItem("Authorization", token);
        history.push("/profileMainPage"); //setVariablePage("/profileMainPage");
      }
    });
    console.log(axios.post("http://localhost:8080/api/auth/signin", body));
  };

  const setVariableUserName = (event) => {
    setUserName(event.target.value);
  };

  const setVariablePassword = (event) => {
    setPassword(event.target.value);
  };

  const setVariablePage = (pageEndPoint) => {
    setPage(pageEndPoint);
  };

  return (
    <div className="LogIn">
      <header className="LogIn-header">
        <a href="/">
          <img src={logo} className="LogIn-logo" alt="logo" />
        </a>
      </header>
      <body className="LogIn-body">
        <div className="ShadedBox">
          <p>Stay Connected</p>
          <div className="SmallerTitleText">
            <p>
              Login for accessing to communities and start sharing.
              <br /> <br />
            </p>
          </div>
          <div className="InputsDiv">
            <input
              onChange={setVariableUserName}
              className="InputBar"
              type="text"
              id="user-name"
              placeholder="Username or E-mail Address"
              name="s"
            />
            <input
              onChange={setVariablePassword}
              className="InputBar"
              type="password"
              id="Password"
              placeholder="Password"
              name="s"
            />
          </div>
          <div className="ButtonDiv">
            <Link className="nav-link" to="/mainPage">
              {/* Uncomment this
                    <Button theme="logInButton" onClick={onClickSignUp} >LOG IN</Button>
                    Development */}
              <Button theme="logInButton">LOG IN</Button>
            </Link>
          </div>
          <div className="BottomTextDiv">
            <Link class="nav-link" to="/forgotPassword">
              Forgot Password?
            </Link>
            <br /> <br />
            Don't have account?{" "}
            <Link class="nav-link" to="/signup">
              Sign Up
            </Link>
            <br /> <br />
          </div>
          <br /> <br />
        </div>
      </body>
    </div>
  );
}

export default LogInPage;
