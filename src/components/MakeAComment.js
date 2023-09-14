import '../style/MainMenuOverlayClubAdding.css';
import {Link} from "react-router-dom";
import Button from '../components/HomePageButton';
import React from 'react';
import ImageUploader from 'react-images-upload';

const MakeACommentContext = React.createContext();


class MakeAComment extends React.Component {

    state = {
        currentInput: null,
    }

    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    setPostText(){

    }

    post(){

    }

    render() {

        return (
            <div className="MainMenuOverlayClubAdding"
                 style={{
                     paddingBottom:"8vh",
                 }}>
                <input
                    onChange={this.setPostText}
                    className="MainMenuOverlayClubAddingInputBar"
                    type="text"
                    id="comment-text"
                    placeholder="Type in your comment..."
                    name="s"
                />
                <div className="MainMenuOverlayClubAddingButtonDiv">
                    <Button onClick={this.post} theme="mainMenuOverlayClubAddingSubmit">Comment</Button>
                </div>
            </div>
        );
    }
}

export default MakeAComment;
