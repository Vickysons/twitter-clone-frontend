import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Widget() {
  return (
    <>
      <div className="widget">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        />
        />
      </div>
      <TwitterTweetEmbed tweetId={"933354946111705097"} />
      <TwitterShareButton
        url={"https://facebook.com/saurabhnemade"}
        options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
      />
      />
    </>
  );
}

export default Widget;
