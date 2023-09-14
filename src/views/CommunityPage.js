import "./CommunityPage.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo_full.png";
import OnlineTopBar from "../components/OnlineTopBar";
import CQABar from "../components/CommunityQuickAccessBar";
import Post from "../components/Post";
import Event from "../components/Event";
import Calendar from "../components/Calendar";
import Member from "../components/Member";
import Comment from "../components/Comment";
import CRateWidget from "../components/CommunityRateWidget";
import SettingsPanel from "../components/SettingsPanel";
import Button from "../components/HomePageButton";
import OverlayMakePostC from "../components/OverlayMakePostC";
import StarRatingComponent from "react-rating-stars-component";
import React from "react";
import { Widget } from "react-chat-widget";

import { withRouter } from "react-router-dom";
import HarryPotterBBG from "../assets/images/test/Community Data/Harry Potter/BannerBackground.jpg";
import HarryPotterCP from "../assets/images/test/Community Data/Harry Potter/CommunityPicture.jpg";
import HisDarkBBG from "../assets/images/test/Community Data/His Dark Materials/BannerBackground.jpg";
import HisDarkCP from "../assets/images/test/Community Data/His Dark Materials/CommunityPicture.jpg";
import AndrzejSapkowskiBBG from "../assets/images/test/Community Data/Andrzej Sapkowski/BannerBackground.jpg";
import AndrzejSapkowskiCP from "../assets/images/test/Community Data/Andrzej Sapkowski/CommunityPicture.jpg";
import ApexLegendsBBG from "../assets/images/test/Community Data/Apex Legends/BannerBackground.jpg";
import ApexLegendsCP from "../assets/images/test/Community Data/Apex Legends/CommunityPicture.jpg";
import MinecraftBBG from "../assets/images/test/Community Data/Minecraft/BannerBackground.jpg";
import MinecraftCP from "../assets/images/test/Community Data/Minecraft/CommunityPicture.jpg";
import ESLGamingBBG from "../assets/images/test/Community Data/ESLGaming/BannerBackground.jpg";
import ESLGamingCP from "../assets/images/test/Community Data/ESLGaming/CommunityPicture.jpg";
import QuantumPhysicsBBG from "../assets/images/test/Community Data/Quantum Physics/BannerBackground.jpg";
import QuantumPhysicsCP from "../assets/images/test/Community Data/Quantum Physics/CommunityPicture.jpg";
import ZoologyBBG from "../assets/images/test/Community Data/Zoology/BannerBackground.jpg";
import ZoologyCP from "../assets/images/test/Community Data/Zoology/CommunityPicture.jpg";
import BerserkBBG from "../assets/images/test/Community Data/Berserk/BannerBackground.jpg";
import BerserkCP from "../assets/images/test/Community Data/Berserk/CommunityPicture.jpg";
import LuckyStarBBG from "../assets/images/test/Community Data/Lucky Star/BannerBackground.jpg";
import LuckyStarCP from "../assets/images/test/Community Data/Lucky Star/CommunityPicture.jpg";
import MiyazakiHayaoBBG from "../assets/images/test/Community Data/Miyazaki Hayao/BannerBackground.jpg";
import MiyazakiHayaoCP from "../assets/images/test/Community Data/Miyazaki Hayao/CommunityPicture.jpg";
import AngelBeatsBBG from "../assets/images/test/Community Data/Angel Beats/BannerBackground.jpg";
import AngelBeatsCP from "../assets/images/test/Community Data/Angel Beats/CommunityPicture.jpg";
import BokurawaMinnaBBG from "../assets/images/test/Community Data/Bokura wa Minna/BannerBackground.jpg";
import BokurawaMinnaCP from "../assets/images/test/Community Data/Bokura wa Minna/CommunityPicture.jpg";
import StarWarsBBG from "../assets/images/test/Community Data/Star Wars/BannerBackground.jpg";
import StarWarsCP from "../assets/images/test/Community Data/Star Wars/CommunityPicture.jpg";
import InnerMainCommunity from "../components/InnerMainCommunity";
import { AiOutlineSetting } from "react-icons/ai";
import ButtonOverlay from "../components/ButtonOverlay";
import Overlay from "../components/Overlay";

const CommunityPageContext = React.createContext();

class CommunityPage extends React.Component {
  testContent = {
    "Harry Potter": {
      communityID: 1,
      communityName: "Harry Potter",
      communityPicture: HarryPotterCP,
      communityColor: "rgba(217,25,255,0.75)",
      communityBadges: "none",
      communityBannerBackground: HarryPotterBBG,
      communityAbout:
        "Welcome to HarryPotter community, the place where fans from around the world can meet and discuss everything in the Harry Potter universe! Be sorted, earn house points, take classes with our fine Hogwarts staff, debate which actor portrayed Dumbledore the best, and finally get some closure for your Post-Potter Depression.",
      memberCount: "3.5k",
      communityRate: 4,
      communityPosts: [1, 2],
      communityComments: [3, 4],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 3, 4, 5, 6, 7],
      communityModerators: [2, 4],
    },
    "His Dark Materials": {
      communityID: 2,
      communityName: "His Dark Materials",
      communityPicture: HisDarkBBG,
      communityColor: "rgba(255,215,0,0.75)",
      communityBadges: "none",
      communityBannerBackground: HisDarkBBG,
      communityAbout:
        "A community for fans of Philip Pullman's His Dark Materials series, including The Book of Dust trilogy and the upcoming BBC/HBO TV series. **THIS IS NOT A SPOILER-SAFE ZONE**",
      memberCount: "7.0k",
      communityRate: 4.5,
      communityPosts: [3],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 3, 4, 5, 6, 7],
      communityModerators: [5],
    },
    "Andrzej Sapkowski": {
      communityID: 3,
      communityName: "Andrzej Sapkowski",
      communityPicture: AndrzejSapkowskiCP,
      communityColor: "rgba(62,64,64,0.75)",
      communityBadges: "none",
      communityBannerBackground: AndrzejSapkowskiBBG,
      communityAbout:
        "In-depth talk about The Witcher universe in general, either regarding Andrzej Sapkowski's works, CD Projekt Red's games, the Netflix show, the comics etc. (yes, even the old Polish show is welcome here), but preferably giving emphasis on the source material. This community is also meant to be a bilingual place for English and Polish speaking audiences. Meaning that we encourage content in both idioms.",
      memberCount: "300",
      communityRate: 3,
      communityPosts: [],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 5, 6],
      communityModerators: [7],
    },
    "Apex Legends": {
      communityID: 4,
      communityName: "Apex Legends",
      communityPicture: ApexLegendsCP,
      communityColor: "rgba(255,0,0,0.75)",
      communityBadges: "none",
      communityBannerBackground: ApexLegendsBBG,
      communityAbout:
        "Community for Apex Legends, a battle royale set in the Titanfall Universe. Apex Predators are a group of mercenary pilots. Apex Legends is developed by Respawn Entertainment and published by EA. Not affiliated with Electronic Arts / Respawn Entertainment.",
      memberCount: "1.3k",
      communityRate: 0.5,
      communityPosts: [],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 5, 6, 7],
      communityModerators: [6],
    },
    Minecraft: {
      communityID: 5,
      communityName: "Minecraft",
      communityPicture: MinecraftCP,
      communityColor: "rgba(25,255,25,0.75)",
      communityBadges: "none",
      communityBannerBackground: MinecraftBBG,
      communityAbout: "Minecraft community on Gazebo.",
      memberCount: "20.0k",
      communityRate: 3,
      communityPosts: [4],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 3, 4, 5, 6],
      communityModerators: [3],
    },
    "ESL Gaming": {
      communityID: 6,
      communityName: "ESL Gaming",
      communityPicture: ESLGamingCP,
      communityColor: "rgba(77,166,255,0.75)",
      communityBadges: "none",
      communityBannerBackground: ESLGamingBBG,
      communityAbout:
        "ESL is the world's largest, independent eSports brand, leading the industry across various games with numerous online and offline competitions. This includes high-profile international and national leagues and tournaments such as the Intel® Extreme Masters, ESL One, ESL Pro Series, StarCraft® II World Championship Series, as well as grassroots amateur cups, leagues, and matchmaking systems.",
      memberCount: "4.9k",
      communityRate: 1.5,
      communityPosts: [5],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 4, 5, 6, 7],
      communityModerators: [7],
    },
    "Quantum Physics": {
      communityID: 7,
      communityName: "Quantum Physics",
      communityPicture: QuantumPhysicsCP,
      communityColor: "rgba(255,228,92,0.75)",
      communityBadges: "none",
      communityBannerBackground: QuantumPhysicsBBG,
      communityAbout:
        "A community for discussing all things related to quantum mechanics.",
      memberCount: "622",
      communityRate: 3.5,
      communityPosts: [6],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 4, 5, 6, 7],
      communityModerators: [4],
    },
    Zoology: {
      communityID: 8,
      communityName: "Zoology",
      communityPicture: ZoologyCP,
      communityColor: "rgba(46,158,108,0.75)",
      communityBadges: "none",
      communityBannerBackground: ZoologyBBG,
      communityAbout:
        "Welcome to Zoology: A community about the scientific study of the behavior, structure, physiology, classification, and distribution of animals.",
      memberCount: "789",
      communityRate: 1.5,
      communityPosts: [7],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 5, 7],
      communityModerators: [],
    },
    Berserk: {
      communityID: 9,
      communityName: "Berserk",
      communityPicture: BerserkCP,
      communityColor: "rgba(42,39,56,0.75)",
      communityBadges: "none",
      communityBannerBackground: BerserkBBG,
      communityAbout: "For fans of the manga Berserk and its adaptations.",
      memberCount: "17.5k",
      communityRate: 5,
      communityPosts: [8],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 3, 4, 5, 6, 7],
      communityModerators: [1, 2, 3, 6, 7],
    },
    "Lucky Star": {
      communityID: 10,
      communityName: "Lucky Star",
      communityPicture: LuckyStarCP,
      communityColor: "rgba(236,1,140,0.75)",
      communityBadges: "none",
      communityBannerBackground: LuckyStarBBG,
      communityAbout:
        "Having fun in school, doing homework together, cooking and eating, playing video games, watching anime. All those little things make up the daily life of the anime-and chocolate-loving-Izumi Konata and her friends. Sometimes relaxing but more than often simply funny.",
      memberCount: "2.3k",
      communityRate: 3,
      communityPosts: [],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 3, 4, 5, 6, 7],
      communityModerators: [2, 5, 6],
    },
    "Miyazaki Hayao": {
      communityID: 11,
      communityName: "Miyazaki Hayao",
      communityPicture: MiyazakiHayaoCP,
      communityColor: "rgba(90,204,159,0.75)",
      communityBadges: "none",
      communityBannerBackground: MiyazakiHayaoBBG,
      communityAbout:
        "A place to discuss legendary director, animator, and screenwriter Hayao Miyazaki.",
      memberCount: "4.2k",
      communityRate: 4,
      communityPosts: [9],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 3, 4, 5, 6, 7],
      communityModerators: [2],
    },
    "Angel Beats": {
      communityID: 12,
      communityName: "Angel Beats",
      communityPicture: AngelBeatsCP,
      communityColor: "rgba(221,1,71,0.75)",
      communityBadges: "none",
      communityBannerBackground: AngelBeatsBBG,
      communityAbout:
        "Angel Beats! - This is a community dedicated to the anime series, visual novel, manga and light novel series Angel Beats! by Key.",
      memberCount: "9.1k",
      communityRate: 2.5,
      communityPosts: [],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 3, 4, 5, 6, 7],
      communityModerator: [5],
    },
    "Bokura wa Minna Kawai-sou": {
      communityID: 13,
      communityName: "Bokura wa Minna Kawai-sou",
      communityPicture: BokurawaMinnaCP,
      communityColor: "rgba(239,239,189,0.75)",
      communityBadges: "none",
      communityBannerBackground: BokurawaMinnaBBG,
      communityAbout:
        "Bokura wa Minna Kawaisou (The Kawai Complex Guide to Manors and Hostel Behavior)",
      memberCount: "6.1k",
      communityRate: 5,
      communityPosts: [],
      communityComments: [],
      communityEventsUpComing: [],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 3, 4, 5, 6, 7],
      communityModerators: [6],
    },
    "Star Wars": {
      communityID: 14,
      communityName: "Star Wars",
      communityPicture: StarWarsCP,
      communityColor: "rgba(5,36,94,0.75)",
      communityBadges: "none",
      communityBannerBackground: StarWarsBBG,
      communityAbout:
        "Star Wars is an American epic space opera franchise, created by George Lucas and centered around a film series that began with the eponymous 1977 movie.",
      memberCount: "17.1k",
      communityRate: 3.5,
      communityPosts: [10, 11],
      communityComments: [5],
      communityEventsUpComing: [1],
      communityEventsOnAir: [],
      communityEventsPast: [],
      communityMembers: [1, 2, 3, 4, 5, 6, 7],
      communityModerators: [1],
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
    this.loadFeed = this.loadFeed.bind(this);
    this.loadEvents = this.loadEvents.bind(this);
    this.loadMembers = this.loadMembers.bind(this);
    this.loadComments = this.loadComments.bind(this);
    const { communityUrl } = this.props.match.params;
    this.state.communityColor = this.testContent[communityUrl].communityColor;
    this.state.communityAbout = this.testContent[communityUrl].communityAbout;
    this.state.communityName = this.testContent[communityUrl].communityName;
    this.state.memberCount = this.testContent[communityUrl].memberCount;
    this.state.communityRate = this.testContent[communityUrl].communityRate;
    this.state.communityPosts = this.testContent[communityUrl].communityPosts;
    this.state.communityMembers =
      this.testContent[communityUrl].communityMembers;
    this.state.communityComments =
      this.testContent[communityUrl].communityComments;
    this.state.communityEventsUpComing =
      this.testContent[communityUrl].communityEventsUpComing;
    this.state.communityEventsOnAir =
      this.testContent[communityUrl].communityEventsOnAir;
    this.state.communityEventsPast =
      this.testContent[communityUrl].communityEventsPast;
    this.state.communityModerators =
      this.testContent[communityUrl].communityModerators;
    this.state.userIsModerator = this.testContent[
      communityUrl
    ].communityModerators.find(
      (number) => number === this.state.loggedInUserID
    );
    // Set initial state
    //this.state = {content: this.renderFeed()}
  }

  state = {
    content: null,
    postFeedContent: null,
    commentFeedContent: null,
    membersFeed: null,
    moderatorsContent: null,
    communityName: null,
    communityBannerBackground: null,
    communityColor: null,
    memberCount: null,
    communityRate: null,
    communityPosts: null,
    communityMembers: null,
    communityComments: null,
    communityEventsUpComing: null,
    communityEventsOnAir: null,
    communityEventsPast: null,
    communityModerators: null,
    userIsModerator: null,

    loggedInUserID: 1, //This value has to be get with axios from backend. It is meaningless to code a front end way to do it and insecure. However still there is no backend so I will hard code this to show difference of logged in user to front end.
  };

  componentDidMount() {
    const { communityUrl } = this.props.match.params;
    this.setState({ communityName: { communityUrl } });
    // console.log({communityUrl});
    // console.log(this.testContent);
    this.setState({
      communityBannerBackground:
        this.testContent[communityUrl].communityBannerBackground,
      communityColor: this.testContent[communityUrl].communityColor,
    });
    this.getPosts();
    this.getComments();
    this.getEvents();
    this.getMembers();
    this.getModerators();
    this.setState({ content: this.renderFeed() });
  }

  directToConctactUs() {
    alert("Still developing!");
  }

  getModerators() {
    this.state.moderatorsContent = this.renderModerators();
  }

  handleNewUserMessage() {}

  renderCustomWidget() {
    return (
      <div
        style={{
          fontSize: "3vmin",
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title={"Welcome to " + this.state.communityName + " Community Chat"}
          subtitle="This is live"
          style={{ fontSize: "3vmin", width: "30vw", height: "20vh" }}
        />
      </div>
    );
  }

  renderModerators() {
    const communityThemeColor = this.state.communityColor;
    return this.state.communityModerators.map(function (memberID) {
      return (
        <Member
          renderMode={6}
          memberID={memberID}
          communityThemeColor={communityThemeColor}
        />
      );
    });
  }

  loadFeed() {
    this.setState({
      content: this.renderFeed(),
    });
  }

  getPosts() {
    this.state.postFeedContent = this.renderPosts();
  }

  renderPosts() {
    const communityThemeColor = this.state.communityColor;
    return this.state.communityPosts.map(function (postID) {
      return <Post postID={postID} communityThemeColor={communityThemeColor} />;
    });
  }

  renderFeed() {
    return (
      <div className="CommunityFrame">
        <div className="CommunityFeed">
          <div
            className="SortingBar"
            style={{ backgroundColor: `${this.state.communityColor}` }}
          >
            <div className="SortingBarButtons">
              <div className="MaterialIconDiv">bar_chart</div>
              <div className="MaterialIconDiv">star_outline</div>
            </div>
          </div>
          <div className="Posts">{this.state.postFeedContent}</div>
        </div>
        <div
          className="CommunityOverview"
          style={{ backgroundColor: `${this.state.communityColor}` }}
        >
          <div className="AboutCommunityOverview">
            <div className="AboutCommunityTitle">About Community</div>
            <div className="AboutCommunityText">
              {this.state.communityAbout}
            </div>
          </div>
          <ButtonOverlay
            overlayContentTitle="Fill and Post!"
            placeHolderContent={
              <Button theme="communityOverviewButton">Post</Button>
            }
            overlayContentComponent=<OverlayMakePostC />
          />
          <ButtonOverlay
            overlayContentTitle="Join Live Chat!"
            placeHolderContent={
              <Button theme="communityOverviewButton">Join Chat</Button>
            }
            overlayContentComponent={this.renderCustomWidget()}
          />

          <div className="ModeratorsDiv">
            <div className="ModeratorsDivText">Moderators</div>
            {this.state.moderatorsContent}
          </div>
        </div>
      </div>
    );
  }

  loadEvents() {
    this.setState({
      content: this.renderEvents(),
    });
  }

  getEvents() {
    this.state.eventFeedContentUpComing = this.renderEventsFeed1();
    this.state.eventFeedContentOnAir = this.renderEventsFeed2();
    this.state.eventFeedContentPast = this.renderEventsFeed3();
  }

  renderEventsFeed1() {
    const communityThemeColor = this.state.communityColor;
    return this.state.communityEventsUpComing.map(function (eventID) {
      return (
        <Event eventID={eventID} communityThemeColor={communityThemeColor} />
      );
    });
  }

  renderEventsFeed2() {
    const communityThemeColor = this.state.communityColor;
    return this.state.communityEventsOnAir.map(function (eventID) {
      return (
        <Event eventID={eventID} communityThemeColor={communityThemeColor} />
      );
    });
  }

  renderEventsFeed3() {
    const communityThemeColor = this.state.communityColor;
    return this.state.communityEventsPast.map(function (eventID) {
      return (
        <Event eventID={eventID} communityThemeColor={communityThemeColor} />
      );
    });
  }

  renderEvents() {
    return (
      <div className="CommunityFrame">
        <div className="CommunityFeed">
          <div className="CommunityUpcoming">
            <div
              className="CommunityEventBar"
              style={{ backgroundColor: `${this.state.communityColor}` }}
            >
              Upcoming
            </div>
            <div className="CommunityEventList">
              {this.state.eventFeedContentUpComing}
            </div>
          </div>
          <div className="CommunityOnAir">
            <div
              className="CommunityEventBar"
              style={{ backgroundColor: `${this.state.communityColor}` }}
            >
              OnAir
            </div>
            <div className="CommunityEventList">
              {this.state.eventFeedContentOnAir}
            </div>
          </div>
          <div className="CommunityPastEvents">
            <div
              className="CommunityEventBar"
              style={{ backgroundColor: `${this.state.communityColor}` }}
            >
              Past Events
            </div>
            <div className="CommunityEventList">
              {this.state.eventFeedContentPast}
            </div>
          </div>
        </div>
        <div
          className="CommunityOverview"
          style={{ backgroundColor: `${this.state.communityColor}` }}
        >
          <Calendar calendarID={1} />
        </div>
      </div>
    );
  }

  loadMembers() {
    this.setState({
      content: this.renderMembers(),
    });
  }

  getMembers() {
    this.state.membersFeed = this.renderMembersFeed();
  }

  renderMembersFeed() {
    const communityThemeColor = this.state.communityColor;
    return this.state.communityMembers.map(function (memberID) {
      return (
        <Member
          renderMode={1}
          memberID={memberID}
          communityThemeColor={communityThemeColor}
        />
      );
    });
  }

  renderMembers() {
    return <div className="CommunityFrame">{this.state.membersFeed}</div>;
  }

  loadComments() {
    this.setState({
      content: this.renderComments(),
    });
  }

  getComments() {
    this.state.commentFeedContent = this.renderCommentsFeed();
  }

  renderCommentsFeed() {
    const communityThemeColor = this.state.communityColor;
    return this.state.communityComments.map(function (commentID) {
      return (
        <Comment
          commentID={commentID}
          communityThemeColor={communityThemeColor}
        />
      );
    });
  }

  renderComments() {
    const communityThemeColor = this.state.communityColor;
    return (
      <div className="CommunityFrame">
        <div className="CommunityFeed">{this.state.commentFeedContent}</div>
        <div
          className="CommunityOverview"
          style={{ backgroundColor: `${this.state.communityColor}` }}
        >
          <CRateWidget communityThemeColor={communityThemeColor} />
        </div>
      </div>
    );
  }

  render() {
    const { communityUrl } = this.props.match.params;
    return (
      <div className="CommunityPage">
        <OnlineTopBar />
        <CQABar userID={this.state.loggedInUserID} />
        <body className="CommunityPage-body">
          <div className="CommunityArea">
            <CommunityPageContext.Provider value={this.state}>
              <div
                className="CommunityBanner"
                style={{
                  backgroundImage: `url(${this.state.communityBannerBackground})`,
                }}
              >
                <div
                  className="CommunityName"
                  style={{ backgroundColor: `${this.state.communityColor}` }}
                >
                  {communityUrl}
                </div>
                <div className="CommunityAttributes">
                  <div
                    className="Rating"
                    style={{ backgroundColor: `${this.state.communityColor}` }}
                  >
                    Rating:
                    <div className="RatingIcons">
                      <StarRatingComponent
                        starCount={5}
                        value={this.state.communityRate}
                        edit={false}
                        activeColor="rgba(0,0,0,1)"
                        color="rgba(0,0,0,0.25)"
                        size="3vmin"
                        isHalf={true}
                      />
                    </div>
                  </div>
                  <div
                    className="MemberCount"
                    style={{ backgroundColor: `${this.state.communityColor}` }}
                  >
                    Member Count: {this.state.memberCount}
                  </div>
                  <div
                    className="MemberCount"
                    style={{ backgroundColor: `${this.state.communityColor}` }}
                  ></div>
                </div>
              </div>
            </CommunityPageContext.Provider>
            <div
              className="CommunityBar"
              style={{ backgroundColor: `${this.state.communityColor}` }}
            >
              <Button theme="communityPageCBarButton" onClick={this.loadFeed}>
                Feed
              </Button>
              <Button theme="communityPageCBarButton" onClick={this.loadEvents}>
                Events
              </Button>
              <Button
                theme="communityPageCBarButton"
                onClick={this.loadMembers}
              >
                Members
              </Button>
              <Button
                theme="communityPageCBarButton"
                onClick={this.loadComments}
              >
                Comments
              </Button>
              {this.state.userIsModerator && (
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
                  overlayContentTitle="Community Settings"
                  overlayContentComponent={<SettingsPanel />}
                />
              )}
            </div>
            <div className="CommunityFrame">
              <p>{this.state.content}</p>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default CommunityPage;
