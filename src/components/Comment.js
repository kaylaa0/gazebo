import '../style/Comment.css';
import {Link} from "react-router-dom";
import React from 'react';
import Member from "./Member";
import StarRatingComponent from "react-rating-stars-component";

const CommentContext = React.createContext();

class Comment extends React.Component {

    testDatabase = {
        1:{
            commentID:1,
            commenterID: 7,
            commentDate: "27 March 2020 9:30pm GMT",
            commentRate: null,
            commentText: "The Force will be with you. Always.",
            commentLikes: 3,
            commentType: 2,
        },
        2:{
            commentID:2,
            commenterID: 3,
            commentDate: "21 March 2020 9:42pm GMT",
            commentRate: null,
            commentText: "a",
            commentLikes: 0,
            commentType: 2,
        },
        3:{
            commentID:3,
            commenterID: 4,
            commentDate: "12 April 2020 2:30pm GMT",
            commentRate: 2,
            commentText: "Expecto Patronum!",
            commentLikes: 4,
            commentType: 1,
        },
        4:{
            commentID:4,
            commenterID: 5,
            commentDate: "10 April 2020 1:30pm GMT",
            commentRate: 3,
            commentText: "Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears. 'After all this time?' 'Always,' said Snape.'",
            commentLikes: 12,
            commentType: 1,
        },
        5:{
            commentID: 5,
            commenterID: 6,
            commentDate: "27 January 2021 4:30pm GMT",
            commentRate: 4.5,
            commentText: "a",
            commentLikes: 10,
            commentType: 1,
        },
    }

    state = {
        content: null,
        commentID: null,
        commenterID: null,
        commentDate: null,
        commentRate: null,
        commentText: null,
        commentLikes: null,
        commentType: null,
    }

    componentDidMount() {
        this.setState({
            commentDate: this.testDatabase[this.props.commentID].commentDate,
            commentRate: this.testDatabase[this.props.commentID].commentRate,
            commentText: this.testDatabase[this.props.commentID].commentText,
            commentLikes: this.testDatabase[this.props.commentID].commentLikes,
            commentType: this.testDatabase[this.props.commentID].commentType,
        });}

    constructor(props){
        super(props)

        // Binding this keyword
        // Set initial state
        this.state.commentID = this.props.commentID;
        this.state.communityThemeColor = this.props.communityThemeColor;
        this.state.commenterID = this.testDatabase[this.props.commentID].commenterID;
        this.state.commentType = this.testDatabase[this.props.commentID].commentType;
        this.state.commentDate = this.testDatabase[this.props.commentID].commentDate;
        this.state.commentRate = this.testDatabase[this.props.commentID].commentRate;
        this.state.commentText = this.testDatabase[this.props.commentID].commentText;
        this.state.commentLikes = this.testDatabase[this.props.commentID].commentLikes;
        this.state.commentType = this.testDatabase[this.props.commentID].commentType;
        this.getRender();
    }

    getRender(){
        if(this.state.commentType === 1){
            this.state.content = this.getCommunityComment();
        }
        else if(this.state.commentType === 2){
            this.state.content = this.getProfileComment();
        }
    }

    getCommunityComment(){
        return (
                <CommentContext.Provider value={this.state.commentID}>
                    <div className="CommunityCommentContentDiv">
                        <div className="CommenterDiv">
                            <Member renderMode={3} memberID={this.state.commenterID}/>
                        </div>
                        <div className="CommentContentDiv">
                            <div className="CommentDate">
                                <p>{this.state.commentDate}</p>
                            </div>
                            <div className="CommentRate">
                                Rating: <StarRatingComponent
                                starCount={5}
                                value={this.state.commentRate}
                                edit={false}
                                activeColor="rgba(0,0,0,1)"
                                color="rgba(0,0,0,0.25)"
                                size="3vmin"
                                isHalf={true}
                            />
                            </div>
                            <div className="CommentTextDiv">
                                {this.state.commentText}
                            </div>
                        </div>
                    </div>
                    <div className="CommentStatsDiv">
                        <button className="CommentUpVoteButton">thumb_up</button>
                        <button className="CommentDownVoteButton">thumb_down</button>
                        <div className="CommentStats">
                            {this.state.commentLikes}
                            <div className="CommentStatsSymbol">thumbs_up_down</div>
                        </div>
                        <button className="CommentCommentButton">comment</button>
                        <button className="CommentReportButton">report_problem</button>
                    </div>
                </CommentContext.Provider>
        );
    }

    getProfileComment(){
        return (
            <CommentContext.Provider value={this.state.commentID}>
                <div className="ProfileCommentContentDiv">
                    <div className="ProfileCommenterDiv">
                        <Member renderMode={5} memberID={this.state.commenterID}/>
                    </div>
                    <div className="ProfileCommentContentDiv">
                        <div className="ProfileCommentDate">
                            <p>{this.state.commentDate}</p>
                        </div>
                        <div className="ProfileCommentTextDiv">
                            {this.state.commentText}
                        </div>
                    </div>
                </div>
                <div className="ProfileCommentStatsDiv">
                    <button className="ProfileCommentUpVoteButton">thumb_up</button>
                    <button className="ProfileCommentDownVoteButton">thumb_down</button>
                    <div className="ProfileCommentStats">
                        {this.state.commentLikes}
                        <div className="ProfileCommentStatsSymbol">thumbs_up_down</div>
                    </div>
                    <button className="ProfileCommentCommentButton">comment</button>
                    <button className="ProfileCommentReportButton">report_problem</button>
                </div>
            </CommentContext.Provider>
        );
    }

    render() {

        return (
            <div className="Comment" style={{backgroundColor: `${this.state.communityThemeColor}`}}>
                {this.state.content}
            </div>
        );

    }
}

export default Comment;
