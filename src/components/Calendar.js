import '../style/Calendar.css';
import {Link} from "react-router-dom";
import {CalendarComponent} from "@syncfusion/ej2-react-calendars";
import React from 'react';

const CalendarContext = React.createContext();

class Calendar extends React.Component {

    state = {
        calendarID: null,
        currentDate: null,
        calendarData: null,
    }

    componentDidMount() {
        this.setState({calendarID : this.props.calendarID});
        this.setState({currentDate: 123, calendarData:{data1: 1222223}});
    }

    constructor(props){
        super(props)

        // Binding this keyword

        // Set initial state
        this.state = {type: ''}

    }

    render() {

        return (
            <div className="Calendar">
                <CalendarComponent/>
            </div>
        );

    }
}

export default Calendar;
