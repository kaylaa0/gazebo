import "../style/Post.css";
import { Link } from "react-router-dom";
import Button from "../components/HomePageButton";
import Member from "../components/Member";
import React from "react";

import post1Image from "../assets/images/test/PostData/1.jpg";

const PostContext = React.createContext();

class Post extends React.Component {
  testDatabase = {
    1: {
      posterID: 7,
      postID: 1,
      postDate: "27 March 2020 9:30pm GMT",
      postImage: post1Image,
      postText: "And that just makes it better",
      postLikes: 494,
    },
    2: {
      posterID: 7,
      postID: 2,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    3: {
      posterID: 6,
      postID: 3,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    4: {
      posterID: 5,
      postID: 4,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    5: {
      posterID: 5,
      postID: 5,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    6: {
      posterID: 4,
      postID: 6,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    7: {
      posterID: 4,
      postID: 7,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    8: {
      posterID: 3,
      postID: 8,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    9: {
      posterID: 2,
      postID: 9,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    10: {
      posterID: 1,
      postID: 10,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    11: {
      posterID: 3,
      postID: 11,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
    12: {
      posterID: 5,
      postID: 12,
      postDate: null,
      postImage: null,
      postText: null,
      postLikes: null,
    },
  };

  state = {
    posterID: null,
    postID: null,
    postDate: null,
    postImage: null,
    postText: null,
    postLikes: null,
    communityThemeColor: null,
  };

  componentDidMount() {
    this.setState({
      postDate: this.testDatabase[this.props.postID].postDate,
      postImage: this.testDatabase[this.props.postID].postImage,
      postText: this.testDatabase[this.props.postID].postText,
      postLikes: this.testDatabase[this.props.postID].postLikes,
    });
  }

  constructor(props) {
    super(props);

    // Binding this keyword
    // Set initial state
    this.state.postID = this.props.postID;
    this.state.communityThemeColor = this.props.communityThemeColor;
    this.state.posterID = this.testDatabase[this.props.postID].posterID;
  }

  render() {
    return (
      <div
        className="Post"
        style={{
          backgroundColor: `${this.state.communityThemeColor}`,
        }}
      >
        <PostContext.Provider value={this.state.posterID}>
          <div className="PosterDiv">
            <Member renderMode={2} memberID={this.state.posterID} />
          </div>
          <div className="PostDate">{this.state.postDate}</div>
          <div className="PostImageDiv">
            {this.state.postImage != null && (
              <img
                src={this.state.postImage}
                style={{ width: "50vw" }}
                alt="Post Image"
              />
            )}
          </div>
          <div className="PostTextDiv">{this.state.postText}</div>
          <div className="PostStatsDiv">
            <button className="UpVoteButton">thumb_up</button>
            <button className="DownVoteButton">thumb_down</button>
            <div className="PostStats">
              {this.state.postLikes}
              <div className="StatsSymbol">thumbs_up_down</div>
            </div>
            <button className="CommentButton">comment</button>
            <button className="ReportButton">report_problem</button>
          </div>
        </PostContext.Provider>
      </div>
    );
  }
}

export default Post;
