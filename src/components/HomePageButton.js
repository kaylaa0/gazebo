import styled from "styled-components";

const theme = {
    homepageContactUsButton: {
        default: 'rgba(27, 59, 187, 0)',
        hover: 'rgba(27, 59, 187, 0.05)',
        font: '500 2.5vmax Roboto',
        border: 'none',
        color: 'black',
        borderRadius: '1vmax',
        margin: '1vmin 3vmin',
        padding: '1vmin 3vmin',
    },
    homepageExploreButton: {
        default: 'rgba(27, 59, 187, 1)',
        hover: 'rgba(27, 59, 187, 0.95)',
        font: '500 3.5vmax Roboto',
        border: 'none',
        color: 'white',
        borderRadius: '1vmax',
        margin: '5vmin 2vmin',
        padding: '4vmin 17vmin',
    },
    homepageLogInButton: {
        default: 'rgba(27, 59, 187, 0)',
        hover: 'rgba(27, 59, 187, 0.05)',
        font: '550 2vmax Roboto',
        border: '2px solid #1B3BBB',
        color: '#1B3BBB',
        borderRadius: '1vmin',
        margin: '0px 1vmax',
        padding: '1vmax 4vmax',
    },
    homepageSignUpButton: {
        default: 'rgba(27, 59, 187, 1)',
        hover: 'rgba(27, 59, 187, 0.95)',
        font: '550 2vmax Roboto',
        border: '2px solid #1B3BBB',
        color: 'white',
        borderRadius: '1vmin',
        margin: '0px 1vmax',
        padding: '1vmax 4vmax',
    },
    signUpPageConfirmButton: {
        default: 'rgba(27, 59, 187, 1)',
        hover: 'rgba(27, 59, 187, 0.95)',
        font: '500 3vmax Roboto',
        border: 'none',
        color: 'white',
        borderRadius: '2vmax',
        margin: '3vmax 0px',
        padding: '2vmax 5vmax',
    },
    logInButton:{
        default: 'rgba(27, 59, 187, 1)',
        hover: 'rgba(27, 59, 187, 0.95)',
        font: '500 3vmax Roboto',
        border: 'none',
        color: 'white',
        borderRadius: '15px',
        margin: '3vmax 0px',
        padding: '2vmax 10vmax',
    },
    passwordForgotCancelButton:{
        default: 'rgba(27, 59, 187, 0)',
        hover: 'rgba(27, 59, 187, 0.05)',
        font: '550 2.5vmax Roboto',
        border: '2px solid #1B3BBB',
        color: '#1B3BBB',
        borderRadius: '1vmax',
        margin: '2vmax 1vmax',
        padding: '2vmax 3.5vmax',
    },
    passwordForgotCheckAccountButton:{
        default: 'rgba(27, 59, 187, 1)',
        hover: 'rgba(27, 59, 187, 0.95)',
        font: '550 2.5vmax Roboto',
        border: '2px solid #1B3BBB',
        color: 'white',
        borderRadius: '1vmax',
        margin: '1vmax 0.5vmax',
        padding: '1vmax 4vmax',
    },
    contactUsButton: {
        default: 'rgba(27, 59, 187, 1)',
        hover: 'rgba(27, 59, 187, 0.95)',
        font: '450 3vmax Roboto',
        height: '3vh',
        width: '3vw',
        border: 'none',
        color: 'white',
        borderRadius: '15px',
        margin: '4vmin 0px',
        padding: '2vmin 12vmin',
    },
    communityPageCBarButton: {
        default: 'rgba(0, 0, 0, 0.25)',
        hover: 'rgba(0, 0, 0, 0.25)',
        height: '7vh',
        font: '550 3.5vmin Roboto',
        border: 'none',
        color: 'black',
        borderRadius: '2vmin',
        margin: '0px 1vw',
        padding: '1vh 2.5vw',
    },
    profilePageCBarButton:{
        default: 'rgba(0, 0, 0, 0.25)',
        hover: 'rgba(0, 0, 0, 0.25)',
        height: '7vh',
        font: '550 2vmax Roboto',
        border: 'none',
        color: 'black',
        borderRadius: '2vmin',
        margin: '0vh 0.5vw',
        padding: '1vh 1vw',
    },
    profilePagePostButton:{
        default: 'rgba(0, 0, 0, 0.25)',
        hover: 'rgba(0, 0, 0, 0.25)',
        height: '7vh',
        font: '550 4vmin Roboto',
        border: 'none',
        color: 'black',
        borderRadius: '2vmin',
        margin: '0vh 0.5vw',
        padding: '1.5vh 2vw',
    },
    communityRateSubmit:{
        default: 'rgba(0, 0, 0, 0.35)',
        hover: 'rgba(0, 0, 0, 0.25)',
        height: '7vh',
        font: '550 4vmin Roboto',
        border: 'none',
        color: 'black',
        borderRadius: '2vmin',
        margin: '0vh 0.5vw',
        padding: '1.5vh 2vw',
    },
    innerPageQuizButton:{
        default: 'rgba(27, 59, 187, 1)',
        hover: 'rgba(27, 59, 187, 0.80)',
        font: '300 1vmax Roboto',
        border: 'none',
        color: 'white',
        borderRadius: '1.5vmin',
        margin: '0.5vmax 1vmax',
        padding: '0.5vmax 2vmax',
    },
   quizTakingConfirmAnswerButton:{
       default: 'rgba(27, 59, 187, 1)',
       hover: 'rgba(27, 59, 187, 0.90)',
       font: '300 2vmax Roboto',
       border: 'none',
       color: 'white',
       borderRadius: '1.5vmin',
       margin: '0vmax 1vw',
       padding: '1vh 6vw',
   },
    quizTakingNavigationButtonLeft:{
        default: 'rgba(255,255,255,0)',
        hover: 'rgba(0,0,0,0.1)',
        font: '300 1vmax Roboto',
        border: 'none',
        color: 'black',
        borderRadius: '1.5vmin',
        margin: '0vmax 0vw',
        padding: '1vh 1vw',
    },quizTakingNavigationButtonRight:{
        default: 'rgba(255,255,255,0)',
        hover: 'rgba(0,0,0,0.1)',
        font: '300 1vmax Roboto',
        border: 'none',
        color: 'black',
        borderRadius: '1.5vmin',
        margin: '0vmax 0vw',
        padding: '1vh 2vw',
    },
    mainMenuOverlayClubAddingSubmit:{
        default: 'rgba(27, 59, 187, 1)',
        hover: 'rgba(27, 59, 187, 0.90)',
        font: '300 2vmax Roboto',
        border: 'none',
        color: 'white',
        borderRadius: '1.5vmin',
        margin: '0vmax 1vw',
        padding: '1vh 6vw',
    },
    communityOverviewButton:{
        default: 'rgba(0, 0, 0, 0.8)',
        hover: 'rgba(0, 0, 0, 0.70)',
        font: '300 2vmax Roboto',
        border: 'none',
        color: 'white',
        borderRadius: '1.5vmin',
        margin: '2vh 0vw',
        padding: '1vh 4vw',
    }
};

const Button = styled.button`
  background-color: ${(props) => ((props.backgroundColor) ? props.backgroundColor : theme[props.theme].default)};
  color: ${(props) => ((props.color) ? props.color : theme[props.theme].color)};
  font: ${(props) => ((props.font) ? props.font : theme[props.theme].font)};
  height: ${(props) => ((props.height) ? props.height : "auto")};
  padding: ${(props) => ((props.padding) ? props.padding : theme[props.theme].padding)};
  border: ${(props) => ((props.border) ? props.border : theme[props.theme].border)};
  border-radius: ${(props) => ((props.borderRadius) ? props.borderRadius : theme[props.theme].borderRadius)};
  outline: ${(props) => ((props.outline) ? props.outline : "none")};
  margin: ${(props) => theme[props.theme].margin};
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => ((props.hover) ? props.hover : theme[props.theme].hover)};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export default Button
