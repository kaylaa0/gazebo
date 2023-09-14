import '../style/CommunityQuickAccessBar.css';
import {Link} from "react-router-dom";
import Button from '../components/HomePageButton';
import React from 'react';
import QuickAccessBarMiniCommunity from '../components/QuickAccessBarMiniCommunity';

const CommunityQuickAccessBarContext = React.createContext();

class CommunityQuickAccessBar extends React.Component {

    testContent =
        [
            1,2,3,4,5,6,7,8,9,10,11,12,13,14
        ]

    state = {
        userID: null,
        communityData: null,
        content: null,
    }

    componentDidMount() {
        this.setState({userID : this.props.userID});
        this.setState({communityData:this.testContent});
        this.getCommunities(this.props.userID);
    }

    constructor(props){
        super(props)
        this.state.communityData = this.testContent;
        // Binding this keyword

        // Set initial state

    }

    getCommunities(userID){
        this.setState({
            content : this.renderCommunities(userID)
        })
    }

    renderCommunities(userID){
        return (
            this.state.communityData.map(function (communityID) {
                return <QuickAccessBarMiniCommunity communityID={communityID}/>
            })
        )
    }

    render() {

        return (
            <div className="CommunityQuickAccessBar">
                {this.state.content}
            </div>
        );

    }
}

export default CommunityQuickAccessBar;
