import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo_full.png";
import SearchBar from "../components/SearchBar";
import ProfileWidget from "../components/ProfileWidgetButton";
import InnerMainPage from "../views/InnerMainPage";
import "../style/OnlineTopBar.css";
import Button from "./HomePageButton";
import React from "react";
import { withRouter } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Dropdown2 from "../components/Dropdown";
import Dropdown3 from "../components/Dropdown";

class OnlineTopBar extends React.Component {
  itemsEvent = [
    {
      id: 1,
      value: "Star Wars Marathon",
    },
    {
      id: 2,
      value: "New Episode Release",
    },
    {
      id: 3,
      value: "Meeting at Cafe",
    },
  ];

  itemsMessage = [
    {
      id: 1,
      value: "You are the new moder...",
    },
    {
      id: 2,
      value: "Hey there handsome u...",
    },
  ];

  itemsNotification = [
    {
      id: 1,
      value: "You have 2 new followers",
    },
    {
      id: 2,
      value: "New community available",
    },
    {
      id: 3,
      value: "Welcome to Gazebo!",
    },
  ];

  state = {
    loggedInUserID: 1,
  };

  profileCommentClick = () => {
    this.props.history.push("/profilePage/" + this.state.loggedInUserID);
    window.location.reload();
  };

  render() {
    return (
      <header className="OnlineTopBar">
        <Link class="nav-link-ghost" to={`/mainPage`}>
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="CSearchBarDiv">
          <SearchBar />
          {/* <ul>
                  {posts.map((post) => (
                      <li key={post.id}>{post.name}</li>
                  ))}
              </ul>*/}
        </div>
        <div className="IconsDiv">
          <div className="IconDiv">
            <Dropdown title="calendar_today" items={this.itemsEvent} />
          </div>
          <div className="IconDiv">
            <Dropdown2 title="mail" items={this.itemsMessage} />
          </div>
          <div className="IconDiv">
            <Dropdown3 title="notifications" items={this.itemsNotification} />
          </div>
        </div>
        <div className="ProfileWidgetDiv">
          <button
            onClick={this.profileCommentClick}
            style={{
              backgroundColor: "rgba(0,0,0,0",
              border: "none",
            }}
          >
            <ProfileWidget />
          </button>
        </div>
      </header>
    );
  }
}

export default withRouter(OnlineTopBar);
