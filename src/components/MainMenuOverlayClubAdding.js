import '../style/MainMenuOverlayClubAdding.css';
import {Link} from "react-router-dom";
import Button from '../components/HomePageButton';
import React from 'react';

const MainMenuOverlayClubAddingContext = React.createContext();

class MainMenuOverlayClubAdding extends React.Component {

    state = {
        currentInput: null,
    }

    componentDidMount() {

    }

    constructor(props){
        super(props)

        // Binding this keyword

        // Set initial state

    }

    setSuggestedClubName(){

    }

    submitClub(){

    }

    render() {

        return (
            <div className="MainMenuOverlayClubAdding">
                <input
                    onChange={this.setSuggestedClubName}
                    className="MainMenuOverlayClubAddingInputBar"
                    type="text"
                    id="club-name"
                    placeholder="Club Name"
                    name="s"
                />
                <div className="MainMenuOverlayClubAddingButtonDiv">
                    <Button onClick={this.submitClub} theme="mainMenuOverlayClubAddingSubmit">Submit</Button>
                </div>
            </div>
        );
    }
}

export default MainMenuOverlayClubAdding;
