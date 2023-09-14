import '../style/MainMenuOverlayClubAdding.css';
import {Link} from "react-router-dom";
import Button from '../components/HomePageButton';
import React from 'react';
import ImageUploader from 'react-images-upload';

const OverlayMakePostCContext = React.createContext();


class OverlayMakePostC extends React.Component {

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
            <div className="MainMenuOverlayClubAdding">
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose image'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    style={{maxWidth:"25vw",
                    marginLeft:"37.5vw",
                        marginBottom:"4vh",
                        marginTop:"8vh",
                    }}
                />
                <input
                    onChange={this.setPostText}
                    className="MainMenuOverlayClubAddingInputBar"
                    type="text"
                    id="post-text"
                    placeholder="Type in your post..."
                    name="s"
                />
                <div className="MainMenuOverlayClubAddingButtonDiv">
                    <Button onClick={this.post} theme="mainMenuOverlayClubAddingSubmit">Post</Button>
                </div>
            </div>
        );
    }
}

export default OverlayMakePostC;
