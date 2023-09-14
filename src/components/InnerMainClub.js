import '../style/InnerMainClub.css';
import {Link} from "react-router-dom";
import Button from '../components/HomePageButton';
import MainMenuOverlayCommunityAdding from '../components/MainMenuOverlayCommunityAdding';
import React from 'react';
import Overlay from "../components/Overlay";
import InnerMainCommunity from "./InnerMainCommunity";

const InnerMainClubContext = React.createContext();

class InnerMainClub extends React.Component {
    testContent = {
        1:
            {
                clubID: 1,
                clubName: "Reading",
                communities: [1,2,3]
            },
        2:
            {
                clubID: 2,
                clubName: "Gaming",
                communities: [4,5,6]
            },
        3:
            {
                clubID: 3,
                clubName: "Studying",
                communities: [7,8]
            },
        4:
            {
                clubID: 4,
                clubName: "Anime",
                communities: [9,10,11,12,13]
            },
        5:
            {
                clubID: 5,
                clubName: "Movies",
                communities: [14]
            },

    }

    state = {
        clubID: null,
        clubData: {
            clubID: null,
            clubName: null,
            communities: null
        },
    }

    componentDidMount() {
        this.setState({clubID : this.props.clubID});
        this.setState({clubData: this.testContent[this.props.clubID]});
        this.getCommunities(this.props.clubID);
    }

    constructor(props){
        super(props)

        // Binding this keyword
        this.getCommunities = this.getCommunities.bind(this)
        // Set initial state
        this.state.clubData = this.testContent[this.props.clubID];
    }

    getCommunities(clubID){
        this.setState({
            content : this.renderCommunities(clubID)
        })
    }

    renderCommunities(clubID){
        return (
                    this.testContent[clubID].communities.map(function (communityID) {
                    return <InnerMainCommunity communityID={communityID}/>
                    })
        )
    }

    render() {
        //console.log(this.props.clubID);
        return (
            <div className="InnerMainClub">
                <div className="InnerMainClubBanner">
                    <div className="InnerMainClubName">
                        <InnerMainClubContext.Provider value={this.state.clubID}>
                            <InnerMainClubContext.Consumer>
                                {clubID => (
                                    (clubID) ? this.testContent[clubID].clubName : 'clubID invalid'
                                )}
                            </InnerMainClubContext.Consumer>
                        </InnerMainClubContext.Provider>
                    </div>
                </div>
                <div className="InnerMainClubContent">
                    <div className="InnerMainClubCommunities">
                        {this.state.content}
                    </div>
                        <div className="InnerMainClubCommunityAddButtonDiv">
                            <Overlay symbol="add" text="" rounding="100vmax" fontSizePassed="5vmin"
                                     textSizePassed="0vmin" paddingPassed="0vh 0vw"
                                     overlayContentTitle="Select a club and suggest a community:"
                                     overlayContentComponent= <MainMenuOverlayCommunityAdding  defaultClubPassed={this.state.clubData.clubName}
                                     defaultClubPassedID={this.state.clubData.clubID}
                            />
                            />
                        </div>
                </div>


            </div>
        );

    }
}

export default InnerMainClub;
