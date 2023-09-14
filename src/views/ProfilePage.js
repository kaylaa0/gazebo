import "./ProfilePage.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo_full.png";
import OnlineTopBar from "../components/OnlineTopBar";
import CQABar from "../components/CommunityQuickAccessBar";
import Post from "../components/Post";
import Calendar from "../components/Calendar";
import ProfileComment from "../components/ProfileComment";
import Button from "../components/HomePageButton";
import ButtonOverlay from "../components/ButtonOverlay";
import MakeAComment from "../components/MakeAComment";
import SettingsPanel from "../components/SettingsPanel";
import React from "react";
import OverlayMakePostP from "../components/OverlayMakePostP";
import Comment from "../components/Comment";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

import member1Image from "../assets/images/test/MemberData/1.jpg";
import member1Banner from "../assets/images/test/MemberData/1b.jpg";
import member2Image from "../assets/images/test/MemberData/2.jpg";
import member2Banner from "../assets/images/test/MemberData/2b.jpg";
import member3Image from "../assets/images/test/MemberData/3.jpg";
import member3Banner from "../assets/images/test/MemberData/3b.jpg";
import member4Image from "../assets/images/test/MemberData/4.jpg";
import member4Banner from "../assets/images/test/MemberData/4b.jpg";
import member5Image from "../assets/images/test/MemberData/5.jpg";
import member5Banner from "../assets/images/test/MemberData/5b.jpg";
import member6Image from "../assets/images/test/MemberData/6.jpg";
import member6Banner from "../assets/images/test/MemberData/6b.jpg";
import member7Image from "../assets/images/test/MemberData/7.jpg";
import member7Banner from "../assets/images/test/MemberData/7b.jpg";
import { Widget } from "react-chat-widget";

class ProfilePage extends React.Component {
  testDatabase = {
    1: {
      memberID: 1,
      memberName: "mando_66",
      memberPicture: member1Image,
      memberBadges: null,
      postsMade: [10],
      memberColor: "rgba(139, 0, 0, 0.5)",
      memberBanner: member1Banner,
      memberRep: 12,
      memberFollowers: 2,
      memberAbout: "This is the way",
      profileComments: [1],
      memberJoinDate: "Apr 14, 2020",
    },
    2: {
      memberID: 2,
      memberName: "aleertt",
      memberPicture: member2Image,
      memberBadges: null,
      postsMade: [9],
      memberColor: "rgba(209,166,54,0.5)",
      memberBanner: member2Banner,
      memberRep: 5,
      memberFollowers: 2,
      memberAbout: "All men are not created equal",
      profileComments: [],
      memberJoinDate: "Apr 10, 2020",
    },
    3: {
      memberID: 3,
      memberName: "SharkEater",
      memberPicture: member3Image,
      memberBadges: null,
      postsMade: [8, 11],
      memberColor: "rgba(221,236,170,0.5)",
      memberBanner: member3Banner,
      memberRep: 43,
      memberFollowers: 10,
      memberAbout: "❄️❄️❄️❄️❄️❄️❄️❄️",
      profileComments: [],
      memberJoinDate: "May 19, 2020",
    },
    4: {
      memberID: 4,
      memberName: "Min Jee",
      memberPicture: member4Image,
      memberBadges: null,
      postsMade: [6, 7],
      memberColor: "rgba(233,191,185,0.5)",
      memberBanner: member4Banner,
      memberRep: 91,
      memberFollowers: 12,
      memberAbout: "고생 끝에 낙이 온다",
      profileComments: [2],
      memberJoinDate: "Jan 20, 2020",
    },
    5: {
      memberID: 5,
      memberName: "𝖧𝗂𝗋𝗈シ♡",
      memberPicture: member5Image,
      memberBadges: null,
      postsMade: [4, 5, 12],
      memberColor: "rgba(35,45,155,0.5)",
      memberBanner: member5Banner,
      memberRep: 102,
      memberFollowers: 39,
      memberAbout: "Well, Crap. The Cat is…",
      profileComments: [],
      memberJoinDate: "Apr 24, 2020",
    },
    6: {
      memberID: 6,
      memberName: "꧁ɴᴇᴢᴜᴋᴏ꧂",
      memberPicture: member6Image,
      memberBadges: null,
      postsMade: [3],
      memberColor: "rgba(35,97,217,0.5)",
      memberBanner: member6Banner,
      memberRep: 4,
      memberFollowers: 8,
      memberAbout: "See you later!",
      profileComments: [],
      memberJoinDate: "Jun 29, 2020",
    },
    7: {
      memberID: 7,
      memberName: "Ajith S.",
      memberPicture: member7Image,
      memberBadges: null,
      postsMade: [1, 2],
      memberColor: "rgba(255,124,213,0.5)",
      memberBanner: member7Banner,
      memberRep: 6,
      memberFollowers: 2,
      memberAbout:
        "As vezes você tem que jogar no papel de um idiota,para enganar o idiota que acha que está enganado você",
      profileComments: [],
      memberJoinDate: "Apr 10, 2020",
    },
  };

  static defaultProps = {
    courceContent: [
      "JSX",
      "React Props",
      "React State",
      "React Lifecycle Methods",
      "React Event Handlers",
      "React Router",
      "React Hooks",
      "Readux",
      "React Context",
    ],
  };

  state = {
    content: null,
    postsContent: null,
    postsMade: null,
    userName: null,
    userPicture: null,
    userBadges: null,
    userColor: null,
    userBanner: null,
    userRep: null,
    userFollowers: null,
    userAbout: null,
    recentVisitors: null,
    profileComments: null,
    userJoinDate: null,

    loggedInUserID: 1, //This value has to be get with axios from backend. It is meaningless to code a front end way to do it and insecure. However still there is no backend so I will hard code this to show difference of logged in user to front end.
  };

  constructor(props) {
    super(props);

    // Binding this keyword
    this.loadPosts = this.loadPosts.bind(this);
    this.loadCalendar = this.loadCalendar.bind(this);
    this.loadComments = this.loadComments.bind(this);

    // Set initial state
    const { profileUrl } = this.props.match.params;
    this.state.userID = this.testDatabase[profileUrl].memberID;
    this.state.postsMade = this.testDatabase[profileUrl].postsMade;
    this.state.userName = this.testDatabase[profileUrl].memberName;
    this.state.userPicture = this.testDatabase[profileUrl].memberPicture;
    this.state.userBadges = this.testDatabase[profileUrl].memberBadges;
    this.state.userColor = this.testDatabase[profileUrl].memberColor;
    this.state.userBanner = this.testDatabase[profileUrl].memberBanner;
    this.state.userRep = this.testDatabase[profileUrl].memberRep;
    this.state.userFollowers = this.testDatabase[profileUrl].memberFollowers;
    this.state.userAbout = this.testDatabase[profileUrl].memberAbout;
    this.state.profileComments = this.testDatabase[profileUrl].profileComments;
    this.state.userJoinDate = this.testDatabase[profileUrl].memberJoinDate;
    this.getPostsContent();
    this.getCommentsContent();
    this.loadPosts();
  }

  componentDidMount() {
    this.loadPosts();
  }

  directToConctactUs() {
    alert("Still developing!");
  }

  loadPosts() {
    this.setState({ content: this.renderPosts() });
  }
  getPostsContent() {
    this.state.postsContent = this.renderPostsContent();
  }

  renderPostsContent() {
    const profileThemeColor = this.state.userColor;
    return this.state.postsMade.map(function (postID) {
      return <Post postID={postID} communityThemeColor={profileThemeColor} />;
    });
  }

  renderPosts() {
    return (
      <div className="ProfileContent">
        <div className="ProfileFeed">
          <div
            className="ProfileFeedSortingBar"
            style={{ backgroundColor: `${this.state.userColor}` }}
          >
            <div className="ProfileFeedSortingBarButtons">
              <div className="MaterialIconDiv">bar_chart</div>
              <div className="MaterialIconDiv">star_outline</div>
            </div>
          </div>
          <div className="Posts">{this.state.postsContent}</div>
        </div>
        <div className="ProfilePostWidgetDiv">
          {parseInt(this.state.loggedInUserID) ===
            parseInt(this.state.userID) && (
            <ButtonOverlay
              placeHolderContent={
                <Button
                  theme="profilePagePostButton"
                  backgroundColor={this.state.userColor}
                  hover={this.state.userColor}
                >
                  Make a Post
                </Button>
              }
              overlayContentTitle="Select Community and Fill in and Post!"
              overlayContentComponent={<OverlayMakePostP />}
            />
          )}
        </div>
      </div>
    );
  }

  loadCalendar() {
    this.setState({
      content: this.renderCalendar(),
    });
  }

  renderCalendar() {
    return (
      <div className="ProfileContent">
        <div className="ProfileCalendar">
          <Calendar calendarID={1} />
        </div>
      </div>
    );
  }

  loadComments() {
    this.setState({
      content: this.renderComments(),
    });
  }

  getCommentsContent() {
    this.state.commentFeedContent = this.renderCommentsFeed();
  }

  renderCommentsFeed() {
    const communityThemeColor = this.state.userColor;
    return this.state.profileComments.map(function (commentID) {
      return (
        <Comment
          commentID={commentID}
          communityThemeColor={communityThemeColor}
        />
      );
    });
  }

  renderComments() {
    return (
      <div className="ProfileContent">
        <div className="CommentProfileFeed">
          {this.state.commentFeedContent}
        </div>
        <div className="ProfilePostWidgetDiv">
          <ButtonOverlay
            placeHolderContent={
              <Button
                theme="profilePagePostButton"
                backgroundColor={this.state.userColor}
                hover={this.state.userColor}
              >
                Make a Comment
              </Button>
            }
            overlayContentTitle="Fill in and Comment!"
            overlayContentComponent={<MakeAComment />}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ProfilePage">
        <OnlineTopBar />
        <CQABar userID={this.state.loggedInUserID} />
        <body className="ProfilePage-body">
          <div className="ProfileArea">
            <div
              className="ProfileBanner"
              style={{ backgroundImage: `url(${this.state.userBanner})` }}
            >
              <div
                className="ProfileBannerPicture"
                style={{
                  backgroundImage: `url(${this.state.userPicture})`,
                  border: `2vmin solid ${this.state.userColor}`,
                }}
              >
                {" "}
              </div>
              <div className="ProfileBannerUserData">
                <div
                  className="ProfileBannerName"
                  style={{ backgroundColor: `${this.state.userColor}` }}
                >
                  {this.state.userName}
                </div>
                <div
                  className="ProfileBannerLastSeen"
                  style={{ backgroundColor: `${this.state.userColor}` }}
                >
                  {this.state.userJoinDate}
                </div>
              </div>
            </div>
            <div
              className="ProfileBar"
              style={{ backgroundColor: `${this.state.userColor}` }}
            >
              <Button theme="profilePageCBarButton" onClick={this.loadPosts}>
                Posts
              </Button>
              <Button theme="profilePageCBarButton" onClick={this.loadCalendar}>
                Calendar
              </Button>
              <Button theme="profilePageCBarButton" onClick={this.loadComments}>
                Comments
              </Button>
              {parseInt(this.state.loggedInUserID) ===
                parseInt(this.state.userID) && (
                <ButtonOverlay
                  placeHolderContent={
                    <Button
                      theme="profilePageCBarButton"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AiOutlineSetting style={{ marginRight: "1vw" }} />{" "}
                      Settings
                    </Button>
                  }
                  overlayContentTitle="Profile Settings"
                  overlayContentComponent={<SettingsPanel />}
                />
              )}
              {parseInt(this.state.loggedInUserID) !==
                parseInt(this.state.userID) && (
                <ButtonOverlay
                  placeHolderContent={
                    <Button
                      theme="profilePageCBarButton"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AiOutlineMessage style={{ marginRight: "1vw" }} />{" "}
                      Message
                    </Button>
                  }
                  overlayContentTitle={"Messaging with " + this.state.userName}
                  overlayContentComponent={
                    <Widget
                      title={""}
                      subtitle="Type in your message"
                      style={{
                        fontSize: "3vmin",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100vw",
                      }}
                    />
                  }
                />
              )}
            </div>
            <div className="ProfileFrame">
              <div className="ProfileSideBar">
                <div
                  className="ProfileSideBarViewScope"
                  style={{ backgroundColor: `${this.state.userColor}` }}
                >
                  Gazebo Profile
                </div>
                <div
                  className="ProfileSideBarReputation"
                  style={{ backgroundColor: `${this.state.userColor}` }}
                >
                  Reputation
                  <br />
                  {this.state.userRep}
                  <br />
                </div>
                <div
                  className="ProfileSideBarFollowers"
                  style={{ backgroundColor: `${this.state.userColor}` }}
                >
                  {this.state.userFollowers} Followers
                  <br />
                </div>
                <div
                  className="ProfileSideBarAbout"
                  style={{ backgroundColor: `${this.state.userColor}` }}
                >
                  About {this.state.userName}
                  <br />
                  {this.state.userAbout}
                </div>
                <div
                  className="ProfileSideBarRecentVisitors"
                  style={{ backgroundColor: `${this.state.userColor}` }}
                >
                  Recent Visitors
                  <p>
                    <br />
                  </p>
                </div>
              </div>

              <div className="ProfileContent">{this.state.content}</div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default ProfilePage;
