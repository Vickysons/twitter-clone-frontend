import "./profile.css";
import photo from "../../assets/images/photo.jpg";

function Profile() {
  return (
    <>
      <div className="img">
        <img src={photo} alt="" />
      </div>
    </>
  );
}

export default Profile;
