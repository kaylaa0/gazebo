import logo from "../assets/images/logos/logo_full.png";
import vectorArt from "../assets/images/illustrations/vector_art_social_friends.png";
import "./HomePage.css";
import Button from "../components/HomePageButton";
import SearchBar from "../components/HomePageSearch";
import { Link, withRouter } from "react-router-dom";

const posts = [
  { id: "1", name: "Community 1" },
  { id: "2", name: "Community 2" },
  { id: "3", name: "Community 3" },
  { id: "4", name: "Community 4" },
];

function directToConctactUs() {
  alert("Still developing! #directToConctactUs");
}

function HomePage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <a href="/">
          <img src={logo} className="Homepage-logo" alt="logo" />
        </a>
        <div className="SearchBarDiv">
          <SearchBar />
          {/* <ul>
                  {posts.map((post) => (
                      <li key={post.id}>{post.name}</li>
                  ))}
              </ul>*/}
        </div>
        <Link class="nav-link" to="/contactUs">
          <Button theme="homepageContactUsButton">Contact Us</Button>
        </Link>
      </header>
      <body className="Homepage-body">
        <div className="ExploreDiv">
          <img src={vectorArt} className="Homepage-vectorArt" alt="vectorArt" />
          <div className="ExploreButtonDiv">
            <Button theme="homepageExploreButton" onClick={directToConctactUs}>
              EXPLORE
            </Button>
          </div>
        </div>
        <div className="SloganDiv">
          <p>
            Share.
            <br />
            Connect.
            <br />
            Enjoy your time.
            <div>
              <Link class="nav-link" to="/login">
                <Button theme="homepageLogInButton">Log In</Button>
              </Link>
              <Link class="nav-link" to="/signup">
                <Button theme="homepageSignUpButton">Sign Up</Button>
              </Link>
            </div>
          </p>
        </div>
      </body>
      <footer className="Homepage-footer">
        <a
          className="Homepage-link"
          href="https://github.com/BBM384-2021/demo1-teras"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
}

export default HomePage;
