import "./QuizTakingPage.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo_full.png";
import Button from "../components/HomePageButton";
import MultiChoiceQuestion from "../components/MultiChoiceQuestion";
import ImageQuestion from "../components/ImageQuestion";
import React from "react";
import { withRouter } from "react-router-dom";

const QuizTakingPageContext = React.createContext();

class QuizTakingPage extends React.Component {
  testDatabase = {
    userData: {
      1: {
        1: {
          status: 0,
          answer: null,
        },

        2: {
          status: 0,
          answer: null,
        },

        3: {
          status: 0,
          answer: null,
        },

        4: {
          status: 0,
          answer: null,
        },
        5: {
          status: 0,
          answer: null,
        },
        6: {
          status: 0,
          answer: null,
        },
        7: {
          status: 0,
          answer: null,
        },
        8: {
          status: 0,
          answer: null,
        },
        9: {
          status: 0,
          answer: null,
        },
        10: {
          status: 0,
          answer: null,
        },
        11: {
          status: 0,
          answer: null,
        },
      },
    },

    questionData: {
      1: {
        type: "MultiChoiceQuestion",
      },
      2: {
        type: "ImageQuestion",
      },
      3: {
        type: "MultiChoiceQuestion",
      },
      4: {
        type: "ImageQuestion",
      },
      5: {
        type: "MultiChoiceQuestion",
      },
      6: {
        type: "ImageQuestion",
      },
      7: {
        type: "MultiChoiceQuestion",
      },
      8: {
        type: "ImageQuestion",
      },
      9: {
        type: "MultiChoiceQuestion",
      },
      10: {
        type: "ImageQuestion",
      },
      11: {
        type: "MultiChoiceQuestion",
      },
    },
  };

  static defaultProps = {
    courceContent: [
      "JSX",
      "React Props",
      "React State",
      "React Lifecycle Methods",
      "React Event Handlers",
      "React Router",
      "React Hooks",
      "Readux",
      "React Context",
    ],
  };

  constructor(props) {
    super(props);
    // Binding this keyword
    this.areYouSure = this.areYouSure.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
    this.state.currentQuestionID = 7;
    this.getQuestion();
    //this.state = {content: this.renderFeed()}
  }

  state = {
    loggedInUserID: 1,
    currentQuestion: null,
    currentQuestionID: null,
  };

  componentDidMount() {}

  directToConctactUs() {
    alert("Still developing!");
  }

  noQuitError() {
    alert("Please finish the quiz!");
  }

  getQuestion() {
    this.state.currentQuestion = this.renderQuestion();
  }

  renderQuestion() {
    if (
      this.testDatabase.questionData[this.state.currentQuestionID].type ===
      "MultiChoiceQuestion"
    ) {
      return (
        <MultiChoiceQuestion
          questionID={this.state.currentQuestionID}
          givenAnswer={
            this.testDatabase.userData[this.state.loggedInUserID][
              this.state.currentQuestionID
            ].answer
          }
        />
      );
    } else if (
      this.testDatabase.questionData[this.state.currentQuestionID].type ===
      "ImageQuestion"
    ) {
      return <ImageQuestion questionID={this.state.currentQuestionID} />;
    }
  }

  nextQuestion() {
    if (this.state.currentQuestionID + 1 > 11) {
      alert("You have completed the quiz!");
      this.props.history.push("/mainPage");
    } else {
      this.setState({ currentQuestionID: this.state.currentQuestionID + 1 });
      this.getQuestion();
    }
  }

  previousQuestion() {
    if (this.state.currentQuestionID - 1 > 1) {
      this.setState({ currentQuestionID: this.state.currentQuestionID - 1 });
      this.getQuestion();
    } else {
    }
  }

  skipQuestion() {
    if (this.state.currentQuestionID + 1 > 11) {
      alert("You have completed the quiz!");
      this.props.history.push("/mainPage");
    } else {
      this.setState({ currentQuestionID: this.state.currentQuestionID + 1 });
      this.getQuestion();
    }
  }

  areYouSure() {
    alert(
      "You should finish the quiz to experience our services. Please continue sometime!"
    );
    this.props.history.push("/mainPage");
  }

  render() {
    return (
      <div className="QuizTakingPage">
        <header className="QuizTakingTopBar">
          <button
            className="QuizLogoButton"
            style={{
              border: "none",
            }}
          >
            <img
              src={logo}
              className="QuizLogo"
              alt="logo"
              onClick={this.areYouSure}
            />
          </button>
        </header>
        <body className="QuizTakingPage-body">
          <div className="QuizTakingQuestionArea">
            <div className="QuizTakingQuestion">
              {this.state.currentQuestion}
            </div>
            <div className="QuizTakingNavigationDiv">
              <Button
                className="QuizTakingNavigationButton"
                theme="quizTakingNavigationButtonLeft"
                onClick={this.previousQuestion}
              >
                <div className="QuizTakingNavigationButtonArrow">
                  arrow_back
                </div>
                <div className="QuizTakingNavigationButtonText">Go Back</div>
              </Button>
              <Button
                theme="quizTakingConfirmAnswerButton"
                onClick={this.nextQuestion}
              >
                <div className="QuizTakingConfirmAnswerButtonText">
                  Next Question
                </div>
              </Button>
              <Button
                className="QuizTakingNavigationButton"
                theme="quizTakingNavigationButtonRight"
                onClick={this.skipQuestion}
              >
                <div className="QuizTakingNavigationButtonArrow">
                  arrow_forward
                </div>
                <div className="QuizTakingNavigationButtonText">Skip</div>
              </Button>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default withRouter(QuizTakingPage);
