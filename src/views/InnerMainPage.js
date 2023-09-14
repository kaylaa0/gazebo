import logo from "../assets/images/logos/logo_full.png";
import "./InnerMainPage.css";
import Button from "../components/HomePageButton";
import { Link } from "react-router-dom";
import OnlineTopBar from "../components/OnlineTopBar";
import InnerMainClub from "../components/InnerMainClub";
import MainMenuOverlayClubAdding from "../components/MainMenuOverlayClubAdding";
import ProgressBar from "../components/ProgressBar";
import dummyBarImage from "../assets/images/test/dummyBar.png";
import Overlay from "../components/Overlay";
import React from "react";
import { withRouter } from "react-router-dom";
import InnerMainCommunity from "../components/InnerMainCommunity";

class InnerMainPage extends React.Component {
  state = {
    userID: 1,
    availableCommunities: [1, 2, 3, 4, 5],
    content: null,
    gazeboStats: {
      totalCommunities: 14,
      totalSuggested: 14,
      totalJoined: 14,
      visibleCommunities: 14,
      suggestJoinRate: 100,
    },
    quizStats: {
      completed: 35,
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

  constructor(props) {
    super(props);

    // Binding this keyword
    this.redirectToQuizTaking = this.redirectToQuizTaking.bind(this);
    this.redoAll = this.redoAll.bind(this);
    this.getClubs = this.getClubs.bind(this);
    // Set initial state
    //this.state = {content: this.renderFeed()}
  }

  componentDidMount() {
    this.getClubs(this.state.userID);
  }

  directToConctactUs() {
    alert("Still developing!");
  }

  redirectToQuizTaking() {
    this.props.history.push("/quizTakingPage");
  }

  redoAll() {
    alert("This will reset your answers!");
    this.props.history.push("/quizTakingPage");
  }

  getClubs(userID) {
    this.setState({
      content: this.renderClubs(userID),
    });
  }

  renderClubs(userID) {
    return this.state.availableCommunities.map(function (clubID) {
      return <InnerMainClub clubID={clubID} />;
    });
  }

  render() {
    return (
      <div className="InnerMainPage">
        <OnlineTopBar />
        <body className="InnerMainPage-body">
          <div className="InnerMainStatistics">
            <div className="InnerMainClubsStatistics">
              <div className="InnerMainClubStatisticsBlock">
                <div>
                  Total Communities: {this.state.gazeboStats.totalCommunities}
                </div>
                <div>
                  Total Suggested: {this.state.gazeboStats.totalSuggested}
                </div>
                <div>Total Joined: {this.state.gazeboStats.totalJoined}</div>
              </div>
              <div className="InnerMainClubStatisticsBlock">
                <div>
                  Visible Communities :{" "}
                  {this.state.gazeboStats.visibleCommunities}
                </div>
                <div>
                  Suggest & Join Rate: {this.state.gazeboStats.suggestJoinRate}%
                </div>
              </div>
            </div>
            <div className="InnerMainQuizStatistics">
              You have answered {this.state.quizStats.completed}% of the quiz!
              <div className="ProgressBarDiv">
                <ProgressBar
                  key={1}
                  bgcolor={"rgba(27, 59, 187, 1)"}
                  completed={this.state.quizStats.completed}
                />
              </div>
              <div className="InnerMainQuizButtons">
                <Button
                  theme="innerPageQuizButton"
                  onClick={this.redirectToQuizTaking}
                >
                  Continue
                </Button>
                <Button theme="innerPageQuizButton" onClick={this.redoAll}>
                  Redo All!
                </Button>
              </div>
            </div>
          </div>
          <div className="InnerMainContent">{this.state.content}</div>
          <div className="ClubAddingDiv">
            <Overlay
              symbol="add"
              text="Make a Club Adding Request"
              rounding="4vmin"
              fontSizePassed="10vmin"
              textSizePassed="5vmin"
              paddingPassed="2vh 3vw"
              overlayContentTitle="Suggest a club name:"
              overlayContentComponent=<MainMenuOverlayClubAdding />
            />
          </div>
        </body>
      </div>
    );
  }
}

export default withRouter(InnerMainPage);
