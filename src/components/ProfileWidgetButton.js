import logo from "../assets/images/logos/logo_full.png";
import SearchBar from "./HomePageSearch";
import testImage from "../assets/images/test/profileImage.png";

const ProfileWidgetButton = () => {
  return (
    <div className="ProfileButton">
      <div className="ImageDiv">
        <img src={testImage} className="testImage" alt="testImage" />
      </div>
      <div className="TextDiv">mando_66</div>
    </div>
  );
};
export default ProfileWidgetButton;
