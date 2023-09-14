import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import HomePage from "./views/HomePage";
import SignUp from "./views/SignUp";
import LogIn from "./views/LogIn";
import ContactUs from "./views/ContactUs";
import ForgotPassword from "./views/ForgotPassword";
import ForgotPasswordCheck from "./views/ForgotPasswordCheck";
import PasswordReset from "./views/PasswordReset";
import InnerMainPage from "./views/InnerMainPage";
import CommunityPage from "./views/CommunityPage";
import ProfilePage from "./views/ProfilePage";
import QuizTakingPage from "./views/QuizTakingPage";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/signup" exact component={() => <SignUp />} />
        <Route path="/login" exact component={() => <LogIn />} />
        <Route path="/contactUs" exact component={() => <ContactUs />} />
        <Route
          path="/forgotPassword"
          exact
          component={() => <ForgotPassword />}
        />
        <Route
          path="/forgotPassword/check"
          exact
          component={() => <ForgotPasswordCheck />}
        />
        <Route
          path="/forgotPassword/reset"
          exact
          component={() => <PasswordReset />}
        />
        <Route path="/mainPage" exact component={() => <InnerMainPage />} />
        <Route path="/profilePage/:profileUrl" exact component={ProfilePage} />
        <Route
          path="/testCommunityPage"
          exact
          component={() => <CommunityPage />}
        />
        <Route path="/communityPage/:communityUrl" component={CommunityPage} />
        <Route
          path="/quizTakingPage"
          exact
          component={() => <QuizTakingPage />}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
