import React from "react";
import "./Feeds.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import NotesIcon from "@mui/icons-material/Notes";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
        <div className="section_two"></div>
      </div>
    </>
  );
}

export default Feeds;
