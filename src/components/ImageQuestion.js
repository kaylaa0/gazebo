import "../views/QuizTakingPage.css";
import { Link } from "react-router-dom";
import Button from "../components/HomePageButton";
import { Test, QuestionGroup, Question, Option } from "react-multiple-choice";
import React from "react";
import { Image, Cut } from "react-image-selector";

import opt1 from "../assets/images/test/Question/1.jpg";
import opt2 from "../assets/images/test/Question/2.jpg";

const ImageQuestionContext = React.createContext();

class ImageQuestion extends React.Component {
  state = {
    questionID: 8,
    questionText: "Select the one you prefer",
    answers: {
      1: opt1,
      2: opt2,
      3: null,
      4: null,
      5: null,
    },
  };

  componentDidMount() {}

  constructor(props) {
    super(props);

    // Binding this keyword

    // Set initial state
  }

  render() {
    return (
      <div className="ImageQuestion">
        <Test
          onOptionSelect={(selectedOptions) =>
            this.setState({ selectedOptions })
          }
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40vw",
            fontSize: "3vmin",
          }}
        >
          <QuestionGroup
            questionNumber={0}
            style={{
              width: "30vw",
              fontSize: "3vmin",
            }}
          >
            <Question>{this.state.questionText}</Question>
            <Option
              value="0"
              style={{
                icon: {
                  color: "rgba(27, 59, 187, 1)",
                },
                option: {},
              }}
            >
              {<img src={this.state.answers[1]} height="100vh" alt="opt" />}
            </Option>
            <Option
              value="1"
              style={{
                icon: {
                  color: "rgba(27, 59, 187, 1)",
                },
                option: {},
              }}
            >
              {<img src={this.state.answers[2]} height="100vh" alt="opt" />}
            </Option>
          </QuestionGroup>
        </Test>
      </div>
    );
  }
}

export default ImageQuestion;
