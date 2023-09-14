import "../style/CommunityQuickAccessBar.css";
import { Link } from "react-router-dom";
import Button from "../components/HomePageButton";
import React from "react";
import HarryPotterCP from "../assets/images/test/Community Data/Harry Potter/CommunityPicture.jpg";
import HisDarkBBG from "../assets/images/test/Community Data/His Dark Materials/BannerBackground.jpg";
import AndrzejSapkowskiCP from "../assets/images/test/Community Data/Andrzej Sapkowski/CommunityPicture.jpg";
import ApexLegendsCP from "../assets/images/test/Community Data/Apex Legends/CommunityPicture.jpg";
import MinecraftCP from "../assets/images/test/Community Data/Minecraft/CommunityPicture.jpg";
import ESLGamingCP from "../assets/images/test/Community Data/ESLGaming/CommunityPicture.jpg";
import QuantumPhysicsCP from "../assets/images/test/Community Data/Quantum Physics/CommunityPicture.jpg";
import ZoologyCP from "../assets/images/test/Community Data/Zoology/CommunityPicture.jpg";
import BerserkCP from "../assets/images/test/Community Data/Berserk/CommunityPicture.jpg";
import LuckyStarCP from "../assets/images/test/Community Data/Lucky Star/CommunityPicture.jpg";
import MiyazakiHayaoCP from "../assets/images/test/Community Data/Miyazaki Hayao/CommunityPicture.jpg";
import AngelBeatsCP from "../assets/images/test/Community Data/Angel Beats/CommunityPicture.jpg";
import BokurawaMinnaCP from "../assets/images/test/Community Data/Bokura wa Minna/CommunityPicture.jpg";
import StarWarsCP from "../assets/images/test/Community Data/Star Wars/CommunityPicture.jpg";
import InnerMainCommunity from "./InnerMainCommunity";

import { withRouter } from "react-router-dom";

const QuickAccessBarMiniCommunityContext = React.createContext();

class QuickAccessBarMiniCommunity extends React.Component {
  testContent = {
    1: {
      communityID: 1,
      communityName: "Harry Potter",
      communityPicture: HarryPotterCP,
      communityColor: "rgba(217,25,255,0.75)",
      communityBadges: "none",
    },
    2: {
      communityID: 2,
      communityName: "His Dark Materials",
      communityPicture: HisDarkBBG,
      communityColor: "rgba(255,215,0,0.75)",
      communityBadges: "none",
    },
    3: {
      communityID: 3,
      communityName: "Andrzej Sapkowski",
      communityPicture: AndrzejSapkowskiCP,
      communityColor: "rgba(62,64,64,0.75)",
      communityBadges: "none",
    },
    4: {
      communityID: 4,
      communityName: "Apex Legends",
      communityPicture: ApexLegendsCP,
      communityColor: "rgba(255,0,0,0.75)",
      communityBadges: "none",
    },
    5: {
      communityID: 5,
      communityName: "Minecraft",
      communityPicture: MinecraftCP,
      communityColor: "rgba(25,255,25,0.75)",
      communityBadges: "none",
    },
    6: {
      communityID: 6,
      communityName: "ESL Gaming",
      communityPicture: ESLGamingCP,
      communityColor: "rgba(77,166,255,0.75)",
      communityBadges: "none",
    },
    7: {
      communityID: 7,
      communityName: "Quantum Physics",
      communityPicture: QuantumPhysicsCP,
      communityColor: "rgba(255,228,92,0.75)",
      communityBadges: "none",
    },
    8: {
      communityID: 8,
      communityName: "Zoology",
      communityPicture: ZoologyCP,
      communityColor: "rgba(46,158,108,0.75)",
      communityBadges: "none",
    },
    9: {
      communityID: 9,
      communityName: "Berserk",
      communityPicture: BerserkCP,
      communityColor: "rgba(42,39,56,0.75)",
      communityBadges: "none",
    },
    10: {
      communityID: 10,
      communityName: "Lucky Star",
      communityPicture: LuckyStarCP,
      communityColor: "rgba(236,1,140,0.75)",
      communityBadges: "none",
    },
    11: {
      communityID: 11,
      communityName: "Miyazaki Hayao",
      communityPicture: MiyazakiHayaoCP,
      communityColor: "rgba(90,204,159,0.75)",
      communityBadges: "none",
    },
    12: {
      communityID: 12,
      communityName: "Angel Beats",
      communityPicture: AngelBeatsCP,
      communityColor: "rgba(221,1,71,0.75)",
      communityBadges: "none",
    },
    13: {
      communityID: 13,
      communityName: "Bokura wa Minna Kawai-sou",
      communityPicture: BokurawaMinnaCP,
      communityColor: "rgba(239,239,189,0.75)",
      communityBadges: "none",
    },
    14: {
      communityID: 14,
      communityName: "Star Wars",
      communityPicture: StarWarsCP,
      communityColor: "rgba(5,36,94,0.75)",
      communityBadges: "none",
    },
  };

  state = {
    communityID: null,
    communityName: null,
    communityPicture: null,
    communityColor: null,
    communityBadges: null,
  };

  componentDidMount() {
    this.setState({ communityID: this.props.communityID });
    this.setState({
      communityName: this.testContent[this.props.communityID].communityName,
      communityPicture:
        this.testContent[this.props.communityID].communityPicture,
      communityColor: this.testContent[this.props.communityID].communityColor,
      communityBadges: this.testContent[this.props.communityID].communityBadges,
    });
  }

  constructor(props) {
    super(props);

    // Binding this keyword
    this.redirectAndRefresh = this.redirectAndRefresh.bind(this);
    // Set initial state
  }

  redirectAndRefresh() {
    this.props.history.push("/communityPage/" + this.state.communityName);
    window.location.reload();
  }

  render() {
    return (
      <QuickAccessBarMiniCommunityContext.Provider
        value={this.state.communityName}
      >
        <button
          onClick={this.redirectAndRefresh}
          style={{
            backgroundColor: "rgba(0,0,0,0",
            border: "none",
          }}
        >
          <div
            className="QuickAccessBarMiniCommunity"
            style={{
              display: "flex",
              backgroundImage: `url(${this.state.communityPicture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "4vw",
              width: "4vw",
              height: "4vw",
            }}
          ></div>
        </button>
      </QuickAccessBarMiniCommunityContext.Provider>
    );
  }
}

export default withRouter(QuickAccessBarMiniCommunity);
