import '../style/Overlay.css';
import {Link} from "react-router-dom";
import React from 'react'

const OverlayContext = React.createContext();

class Overlay extends React.Component {

    state = {
        style: {
            width: null,
            rounding: null,
            fontSizePassed: null,
            textSizePassed: null,
            paddingPassed: null,
        },
        content: {
            symbol: null,
            text: null,
        },
        overlayContent: {
            titlePassed: null,
            componentPassed: null,
        }
    }

    constructor(props) {
        super(props);
        this.setState({
            style:{
                width:0,
                rounding: null,
                fontSizePassed: null,
                textSizePassed: null,
                paddingPassed: null,
        }});
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    componentDidMount() {
        this.setState({style:{
                width:0,
                rounding: this.props.rounding,
                fontSizePassed: this.props.fontSizePassed,
                textSizePassed: this.props.textSizePassed,
                paddingPassed: this.props.paddingPassed,
            }});
        this.setState({content : {symbol: this.props.symbol, text: this.props.text}});
        this.setState({overlayContent :
                {titlePassed: this.props.overlayContentTitle, componentPassed: this.props.overlayContentComponent}
        });
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.closeNav);
        this.clearContent();
    }

    clearContent() {
        this.closeNav();
    }

    setDoc(){
        document.addEventListener("click", this.closeNav)
    }

    openNav() {
        const style = { width : "100vw" };
        this.setState({ style });
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        setTimeout(this.setDoc,
            2000
        )

    }

    closeNav() {
        document.removeEventListener("click", this.closeNav);
        const style = { width : 0 };
        this.setState({ style });
        document.body.style.backgroundColor = "#F3F3F3";
    }

    render() {
        return (
                <div>
                    <OverlayContext.Provider value={this.state.content}>
                        <span className = "OverlayContent" onClick={this.openNav}
                              style={{
                                  borderRadius:`${this.state.style.rounding}`,
                                  padding:`${this.state.style.paddingPassed}`,
                              }}
                        >
                            <div className = "OverlayContentSymbol"
                                 style={{
                                     fontSize:`${this.state.style.fontSizePassed}`,
                                 }}
                            >
                                {this.state.content.symbol}
                            </div>
                            <div className = "OverlayContentText"
                                 style={{
                                     fontSize:`${this.state.style.textSizePassed}`,
                                 }}
                            >
                                {this.state.content.text}
                            </div>
                        </span>
                    </OverlayContext.Provider>
                    <OverlayContext.Provider value={this.state.overlayContent}>
                        <div
                            ref       = "snav"
                            className = "Overlay"
                            style     = {this.state.style}
                        >
                            <div className = "SidenavContainer">
                                <div className = "OverlayDefinedContent">
                                    <h2>{this.state.overlayContent.titlePassed}</h2>
                                    <p>{this.state.overlayContent.componentPassed}</p>
                                </div>
                                <a
                                    href      = "javascript:void(0)"
                                    className = "closebtn"
                                    onClick   = {this.closeNav}
                                >
                                    ×
                                </a>
                                <div className = "list-group">
                                    {/*your form component goes here */}
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </OverlayContext.Provider>
                </div>
        );
    }
}

export default Overlay
