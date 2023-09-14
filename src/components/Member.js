import "../style/Member.css";
import { Link } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";

import defaultMemberPicture from "../assets/images/test/MemberData/default.jpg";

import member1Image from "../assets/images/test/MemberData/1.jpg";
import member2Image from "../assets/images/test/MemberData/2.jpg";
import member3Image from "../assets/images/test/MemberData/3.jpg";
import member4Image from "../assets/images/test/MemberData/4.jpg";
import member5Image from "../assets/images/test/MemberData/5.jpg";
import member6Image from "../assets/images/test/MemberData/6.jpg";
import member7Image from "../assets/images/test/MemberData/7.jpg";
import ProfileWidget from "./ProfileWidgetButton";

const MemberContext = React.createContext();

class Member extends React.Component {
  testDatabase = {
    1: {
      memberID: 1,
      memberName: "mando_66",
      memberPicture: member1Image,
      memberBadges: null,
    },
    2: {
      memberID: 2,
      memberName: "aleertt",
      memberPicture: member2Image,
      memberBadges: null,
    },
    3: {
      memberID: 3,
      memberName: "SharkEater",
      memberPicture: member3Image,
      memberBadges: null,
    },
    4: {
      memberID: 4,
      memberName: "Min Jee",
      memberPicture: member4Image,
      memberBadges: null,
    },
    5: {
      memberID: 5,
      memberName: "𝖧𝗂𝗋𝗈シ♡",
      memberPicture: member5Image,
      memberBadges: null,
    },
    6: {
      memberID: 6,
      memberName: "꧁ɴᴇᴢᴜᴋᴏ꧂",
      memberPicture: member6Image,
      memberBadges: null,
    },
    7: {
      memberID: 7,
      memberName: "Ajith S.",
      memberPicture: member7Image,
      memberBadges: null,
    },
  };

  state = {
    renderMode: null,
    memberID: null,
    memberName: null,
    memberPicture: null,
    memberBadges: null,
    content: null,
  };

  componentDidMount() {}

  constructor(props) {
    super(props);

    // Binding this keyword
    this.profileCommentClick = this.profileCommentClick.bind(this);
    // Set initial state
    this.state.renderMode = this.props.renderMode;
    this.state.communityThemeColor = this.props.communityThemeColor;
    this.state.memberID = this.props.memberID;
    this.state.memberName = this.testDatabase[this.props.memberID].memberName;
    this.state.memberPicture =
      this.testDatabase[this.props.memberID].memberPicture;
    this.state.memberBadges =
      this.testDatabase[this.props.memberID].memberBadges;
    this.getRender(this.props.renderMode);
  }

  getRender(mode) {
    if (mode === 1) {
      this.state.content = this.getMiniProfileRender();
    } else if (mode === 2) {
      this.state.content = this.getPosterProfileRender();
    } else if (mode === 3) {
      this.state.content = this.getCommenterProfileRender();
    } else if (mode === 4) {
      this.state.content = this.getTopBarProfileRender();
    } else if (mode === 5) {
      this.state.content = this.getProfileCommentRender();
    } else if (mode === 6) {
      this.state.content = this.getBallRender();
    }
  }

  getMiniProfileRender() {
    return (
      <Link
        class="nav-link-ghost-black"
        to={`/profilePage/${this.state.memberID}`}
      >
        <div
          className="MiniProfile"
          style={{
            backgroundColor: `${this.state.communityThemeColor}`,
          }}
        >
          <div className="MiniProfileImageDiv">
            {this.state.memberPicture != null && (
              <div
                className="MiniProfileImage"
                style={{ backgroundImage: `url(${this.state.memberPicture})` }}
              />
            )}
            {this.state.memberPicture == null && (
              <div
                className="MiniProfileImage"
                style={{ backgroundImage: `url(${defaultMemberPicture})` }}
              />
            )}
          </div>
          <div className="MiniProfileUsername">{this.state.memberName}</div>
          <div className="MiniProfileBadges">{this.state.memberBadges}</div>
        </div>
      </Link>
    );
  }

  getPosterProfileRender() {
    return (
      <Link
        class="nav-link-ghost-black"
        to={`/profilePage/${this.state.memberID}`}
      >
        <div
          className="PosterProfile"
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          }}
        >
          <div className="PosterProfileImageDiv">
            {this.state.memberPicture != null && (
              <div
                className="PosterProfileImage"
                style={{ backgroundImage: `url(${this.state.memberPicture})` }}
              />
            )}
            {this.state.memberPicture == null && (
              <div
                className="PosterProfileImage"
                style={{ backgroundImage: `url(${defaultMemberPicture})` }}
              />
            )}
          </div>
          <div className="PosterProfileUsername">{this.state.memberName}</div>
          <div className="PosterProfileBadges">{this.state.memberBadges}</div>
        </div>
      </Link>
    );
  }

  getCommenterProfileRender() {
    return (
      <Link
        class="nav-link-ghost-black"
        to={`/profilePage/${this.state.memberID}`}
      >
        <div
          className="CommenterProfile"
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          }}
        >
          <div className="CommenterProfileImageDiv">
            {this.state.memberPicture != null && (
              <div
                className="PosterProfileImage"
                style={{ backgroundImage: `url(${this.state.memberPicture})` }}
              />
            )}
            {this.state.memberPicture == null && (
              <div
                className="PosterProfileImage"
                style={{ backgroundImage: `url(${defaultMemberPicture})` }}
              />
            )}
          </div>
          <div className="CommenterProfileUsername">
            {this.state.memberName}
          </div>
          <div className="CommenterProfileBadges">
            {this.state.memberBadges}
          </div>
        </div>
      </Link>
    );
  }

  getTopBarProfileRender() {}

  getProfileCommentRender() {
    return (
      <button
        onClick={this.profileCommentClick}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          border: "none",
          borderRadius: "3vh",
        }}
      >
        <div className="ProfileCommenterProfile">
          <div className="ProfileCommenterProfileImageDiv">
            {this.state.memberPicture != null && (
              <div
                className="ProfileCommenterProfileImage"
                style={{ backgroundImage: `url(${this.state.memberPicture})` }}
              />
            )}
            {this.state.memberPicture == null && (
              <div
                className="ProfileCommenterProfileImage"
                style={{ backgroundImage: `url(${defaultMemberPicture})` }}
              />
            )}
          </div>
          <div className="ProfileCommenterProfileUsername">
            {this.state.memberName}
          </div>
        </div>
      </button>
    );
  }

  getBallRender() {
    return (
      <Link
        class="nav-link-ghost-black"
        to={`/profilePage/${this.state.memberID}`}
      >
        <div className="BallRenderProfile">
          <div className="BallRenderProfileImageDiv">
            {this.state.memberPicture != null && (
              <div
                className="BallRenderProfileImage"
                style={{ backgroundImage: `url(${this.state.memberPicture})` }}
              />
            )}
            {this.state.memberPicture == null && (
              <div
                className="BallRenderProfileImage"
                style={{ backgroundImage: `url(${defaultMemberPicture})` }}
              />
            )}
          </div>
        </div>
      </Link>
    );
  }

  profileCommentClick() {
    this.props.history.push("/profilePage/" + this.state.memberID);
    window.location.reload();
  }

  render() {
    return <div className="Member">{this.state.content}</div>;
  }
}

export default withRouter(Member);
