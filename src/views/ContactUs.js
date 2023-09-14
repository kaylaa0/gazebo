import logo from "../assets/images/logos/logo_full.png";
import "./ContactUs.css";
import Button from "../components/HomePageButton";
import { Link } from "react-router-dom";

function ContactUsPage() {
  return (
    <div className="ContactUs">
      <header className="ContactUs-header">
        <a href="/">
          <img src={logo} className="ContactUs-logo" alt="logo" />
        </a>
      </header>
      <body className="ContactUs-body">
        <div className="ShadedBox">
          <p>Stay Connected</p>
          <div className="SmallerTitleText">
            <p>
              Share with us.
              <br /> <br />
            </p>
          </div>
          <div className="InputsDiv">
            <input
              className="InputBar"
              type="text"
              id="email"
              placeholder="E-mail Address"
              name="s"
            />
            <input
              className="InputBarBig"
              type="text"
              id="message"
              placeholder="Enter Your Message..."
              name="s"
            />
          </div>
          <div className="ButtonDiv">
            <Button theme="contactUsButton">SUBMIT</Button>
          </div>
          <br /> <br />
        </div>
      </body>
    </div>
  );
}

export default ContactUsPage;
