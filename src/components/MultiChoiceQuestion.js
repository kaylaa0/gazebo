import '../views/QuizTakingPage.css';
import {Link} from "react-router-dom";
import Button from '../components/HomePageButton';
import { Test, QuestionGroup, Question, Option } from 'react-multiple-choice';
import React from 'react';

class MultiChoiceQuestion extends React.Component {

    state = {
        questionID: 7,
        questionText: "Which one of the following you prefer to do in your free time",
        answers: {
            1: "Watching TV",
            2: "Playing Games",
            3: "Studying",
            4: "Drawing",
        },
        selectedOptions: {}
    }

    componentDidMount() {

    }

    constructor(props){
        super(props)

        // Binding this keyword

        // Set initial state

    }

    render() {

        return (
            <div className="MultiChoiceQuestion" style={{
                display: 'flex',
                width:"40vw",

            }}>
                <Test onOptionSelect={selectedOptions => this.setState({ selectedOptions })}
                      style={{
                          display: 'flex',
                          alignItems: "center",
                          justifyContent: "center",
                          width:"40vw",
                          fontSize:"3vmin",
                      }}

                >
                    <QuestionGroup questionNumber={0}
                                   style={{
                                       width:"30vw",
                                       fontSize:"3vmin",
                                   }}
                    >
                        <Question>{this.state.questionText}</Question>
                        <Option value="0"
                                style={{
                                    icon: {
                                        color: "rgba(27, 59, 187, 1)",
                                    },
                                    option: {

                                    },

                                }}

                        >{this.state.answers[1]}</Option>
                        <Option value="1"
                                style={{
                                    icon: {
                                        color: "rgba(27, 59, 187, 1)",
                                    },
                                    option: {

                                    },

                                }}>{this.state.answers[2]}</Option>
                        <Option value="2"
                                style={{
                                    icon: {
                                        color: "rgba(27, 59, 187, 1)",
                                    },
                                    option: {

                                    },

                                }}>{this.state.answers[3]}</Option>
                        <Option value="3"
                                style={{
                                    icon: {
                                        color: "rgba(27, 59, 187, 1)",
                                    },
                                    option: {

                                    },

                                }}>{this.state.answers[4]}</Option>
                    </QuestionGroup>
                </Test>
            </div>
        );

    }
}

export default MultiChoiceQuestion;
