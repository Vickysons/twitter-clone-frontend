import React from "react";
import "./Feeds.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import NotesIcon from "@mui/icons-material/Notes";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CommentIcon from "@mui/icons-material/Comment";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from "@mui/icons-material/Verified";
import ManuLogo from "../../assets/images/manu.png";
import Celebration from "../../assets/images/celebration.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ForumIcon from "@mui/icons-material/Forum";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/Upload";
import Profile from "../profile/Profile";
function Feeds() {
  return (
    <>
      <div className="Feed_container">
        <div className="full_container">
          <div className="home_Header">
            <div className="HomePage">
              <h3>Home</h3>
            </div>
            <div className="homeIcon">
              <AutoAwesomeIcon />
            </div>
          </div>
          <div className="profile_bottom">
            <div className="image_profile">
              <Profile />
            </div>
            <div className="info_profile">
              <textarea
                placeholder="What's happening?"
                name=""
                id="textArea"
                cols="30"
                rows="0"
              ></textarea>
            </div>
          </div>
          <div className="icon_page">
            <div className="main_icon">
              <div className="original_icon">
                <CropOriginalIcon />
              </div>
              <div className="daydreamIcon">
                <SettingsSystemDaydreamIcon />
              </div>
              <div className="notesIcon">
                <NotesIcon />
              </div>
              <div className="emojiIcon">
                <SentimentDissatisfiedIcon />
              </div>
              <div className="access">
                <AccessTimeIcon />
              </div>
              <div className="settings">
                <LocationOnIcon />
              </div>
            </div>
            <div className="tweet_page">
              <button>Tweet</button>
            </div>
          </div>
        </div>
        <div className="section_two">
          <div className="seeMore">
            <CommentIcon />

            <span>
              You might like . <span className="see_more">see more</span>
            </span>
          </div>
          <div className="closeIcon">
            <CloseIcon />
          </div>
        </div>
        <div className="feeds_section">
          <div className="side_content">
            <div className="img_side">
              <img src={ManuLogo} ait="ManuLogo" />
            </div>
            <div className="heading">
              <span id="username">Manchester United</span>
              <span id="Verified">
                <VerifiedIcon />
              </span>
              <span id="nick">@Manutd</span> <span id="timestamp">2h</span>
              <p>
                Christiano Ronaldo has scored 17 goals in the premier league
                this season
              </p>
              <div className="main_img">
                <img src={Celebration} alt="celebration" />
              </div>
              <div className="react_icon">
                <ForumIcon />
                <span id="digits">10</span>
                <LoopIcon />
                <span id="digits">5</span>
                <FavoriteBorderIcon />
                <span id="digits">250</span>
                <UploadIcon />
                <span id="dogits">85</span>
              </div>
            </div>
          </div>
          <div className="icon_section">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeds;
