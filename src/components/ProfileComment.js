import '../style/ProfileComment.css';
import {Link} from "react-router-dom";
import React from 'react';

const ProfileCommentContext = React.createContext();

class ProfileComment extends React.Component {

    state = {
        commentID: null,
        commenterData: null,
        commentData: null,
    }

    componentDidMount() {
        this.setState({commentID : this.props.commentID});
        this.setState({commenterData: {name:1, profilePicture:2, badges:[1,2]},commentData: {date:1, rate:2, text:2, like:3}});
    }

    constructor(props){
        super(props)

        // Binding this keyword

        // Set initial state
        this.state = {type: ''}

    }

    render() {

        return (
            <div className="ProfileComment">
                <ProfileCommentContext.Provider value={this.state.commentID}>
                    <ProfileCommentContext.Consumer>
                        {commentID => (
                            (commentID) ? commentID : 'commentID invalid'
                        )}
                    </ProfileCommentContext.Consumer>
                </ProfileCommentContext.Provider>
            </div>
        );

    }
}

export default ProfileComment;
