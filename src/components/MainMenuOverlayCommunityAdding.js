import '../style/MainMenuOverlayCommunityAdding.css';
import {Link} from "react-router-dom";
import Button from '../components/HomePageButton';
import React from 'react';
import Select from 'react-select';

const MainMenuOverlayCommunityAddingContext = React.createContext();

class MainMenuOverlayCommunityAdding extends React.Component {

    state = {
        currentInput: null,
        defaultClubPassed: null,
        defaultClubPassedID: null,
        selectedClub: null,
        selectedClubID: null,
    }


    actions = [
        { label: "Reading", value: 1 },
        { label: "Gaming", value: 2 },
        { label: "Studying", value: 3 },
        { label: "Anime", value: 4 },
        { label: "Movies", value: 5 }
    ];

    customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px solid black',
            borderTop: '1px solid black',
            color: state.isSelected ? 'rgba(255,255,255,1)' : 'black',
            backgroundColor: state.isSelected ? 'rgba(0,0,0,0.9)' : 'white'
        }),
        control: (provided) => ({
            ...provided,
            marginTop: "5%",
        })
    }

    componentDidMount() {
        this.setState({defaultClubPassed: this.props.defaultClubPassed});
        this.setState({defaultClubPassedID: this.props.defaultClubPassedID});
    }

    constructor(props){
        super(props)
        this.state.defaultClub= this.props.defaultClubPassed;
        this.state.defaultClubID= this.props.defaultClubPassedID;
        // Binding this keyword
        // Set initial state
    }

    setSuggestedClubName(){

    }

    submitClub(){

    }

    render() {
        return (
            <div className="MainMenuOverlayCommunityAdding">
                <div className="MainMenuOverlayCommunityAddingClubSelectDiv">
                    <Select className="MainMenuOverlayCommunityAddingClubSelect"
                            styles = { this.customStyles }
                            options={ this.actions }
                            defaultValue={{ label: this.state.defaultClub, value: this.state.defaultClubID }}
                            onChange={e => {
                                this.setState({
                                    selectedClub: e.label,
                                    selectedClubID: e.value
                                });
                            }}
                            />
                </div>
                <input
                    onChange={this.setSuggestedClubName}
                    className="MainMenuOverlayCommunityAddingInputBar"
                    type="text"
                    id="club-name"
                    placeholder="Community Name"
                    name="s"
                />
                <div className="MainMenuOverlayCommunityAddingButtonDiv">
                    <Button onClick={this.submitClub} theme="mainMenuOverlayClubAddingSubmit">Submit</Button>
                </div>
            </div>
        );
    }
}

export default MainMenuOverlayCommunityAdding;
