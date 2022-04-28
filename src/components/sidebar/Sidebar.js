import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../profile/Profile";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="twitter-logo">
          <TwitterIcon />
        </div>
        <div className="navigations">
          <div className="home">
            <div className="home-icons">
              <HomeIcon />
            </div>
            <div className="home-text">Home</div>
          </div>
          <div className="explore">
            <div className="explore-icons">
              <TagIcon />
            </div>
            <div className="explore-text">Explore</div>
          </div>
          <div className="notification">
            <div className="notification-icons">
              <NotificationsIcon />
            </div>
            <div className="notificaion-text">Notification</div>
          </div>
          <div className="messages">
            <div className="messages-icon">
              <MailOutlineIcon />
            </div>
            <div className="messages-text">Messages</div>
          </div>
          <div className="bookmarks">
            <div className="bookmarks-icons">
              <BookmarkIcon />
            </div>
            <div className="bookmarks-text">Bookmarks</div>
          </div>
          <div className="lists">
            <div className="lists-icons">
              <ListAltIcon />
            </div>
            <div className="lists-text">Lists</div>
          </div>
          <div className="profile">
            <div className="profile-icons">
              <PersonIcon />
            </div>
            <div className="profile-text">Profile</div>
          </div>
          <div className="more">
            <div className="more-icons">
              <MoreHorizIcon />
            </div>
            <div className="more-text">More</div>
          </div>
          <div className="tweet_btn">
            <button>Tweet</button>
          </div>
        </div>
        <div className="bottom_profile">
          <div className="proflie_image">
            <Profile />
          </div>
          <div className="profile_info">
            <p>Donmartins</p>
            <h5>@Donmart25924229</h5>
          </div>
          <div className="profile_more">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
