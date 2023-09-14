import '../style/Event.css';
import {Link} from "react-router-dom";
import Button from '../components/HomePageButton';
import React from 'react';
import Member from "./Member";

const EventContext = React.createContext();

class Event extends React.Component {

    testDatabase={
        1:{
            eventID: 1,
            eventDate: "13 July 2021",
            eventHour: "18:00 GMT",
            eventText: "We are watching Star Wars Marathon Together!",
            invited: 180,
            willJoin: 12,
        },
    }

    state = {
        content:null,
        eventID: null,
        eventDate: null,
        eventHour: null,
        eventText: null,
        invited: null,
        willJoin: null,
    }

    componentDidMount() {
        this.setState({eventID : this.props.eventID});
    }

    constructor(props){
        super(props)

        // Binding this keyword

        // Set initial state
        this.state.eventID= this.props.eventID;
        this.state.communityThemeColor = this.props.communityThemeColor;
        this.state.eventDate = this.testDatabase[this.props.eventID].eventDate;
        this.state.eventHour = this.testDatabase[this.props.eventID].eventHour;
        this.state.eventText = this.testDatabase[this.props.eventID].eventText;
        this.state.invited = this.testDatabase[this.props.eventID].invited;
        this.state.willJoin = this.testDatabase[this.props.eventID].willJoin;
        this.getRender();
    }

    getRender() {
        this.state.content = this.getEvent();
    }

    getEvent(){
        return (
            <EventContext.Provider value={this.state}>
                <div className="EventDateDiv">
                    <div className="EventDate">
                        {this.state.eventDate}
                    </div>
                    <div className="EventHour">
                        {this.state.eventHour}
                    </div>
                </div>
                <div className="EventContentDiv">
                    <div className="EventText">
                        <p>{this.state.eventText}</p>
                    </div>
                    <div className="EventStats">
                        <div className="EventStatsInvited">
                            Invited: {this.state.invited}
                        </div>
                        <div className="EventStatsWillJoin">
                            Will Join: {this.state.willJoin}
                        </div>
                    </div>
                </div>
            </EventContext.Provider>
        );
    }
    render() {

        return (
            <div className="Event"style={{backgroundColor: `${this.state.communityThemeColor}`}}>
                {this.state.content}
            </div>
        );

    }
}

export default Event;
