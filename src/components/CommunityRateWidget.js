import '../style/CommunityRateWidget.css';
import {Link} from "react-router-dom";
import React from 'react';
import Button from "./HomePageButton";
import StarRatingComponent from "react-rating-stars-component";

const CRateWidgetContext = React.createContext();

class CommunityRateWidget extends React.Component {

    state = {
        currentInput: null,
        communityThemeColor: null,
    }

    componentDidMount() {

    }

    constructor(props){
        super(props)

        // Binding this keyword

        // Set initial state
        this.state.communityThemeColor = this.props.communityThemeColor;
    }


    submitComment(){

    }

    render() {

        return (
            <div className="CRateWidget">
                <StarRatingComponent
                    starCount={5}
                    value={this.state.communityRate}
                    edit={true}
                    activeColor="rgba(0,0,0,1)"
                    color="rgba(0,0,0,0.25)"
                    size="10vmin"
                    isHalf={true}
                />
                <div className="CRateWidgetInput">
                    <input
                    onChange={this.setSuggestedClubName}
                    className="CRateWidgetInputBar"
                    type="text"
                    id="comment"
                    placeholder="Comment"
                    name="s"
                />
                </div>

                <div className="CRateWidgetButtonDiv">
                    <Button onClick={this.submitComment} theme="communityRateSubmit">Submit</Button>
                </div>
            </div>
        );
    }
}

export default CommunityRateWidget;
