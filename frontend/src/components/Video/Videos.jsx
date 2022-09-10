import React from "react";
import "./Video.css";



// const src =
//   "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const Video = () => {
  return (
    <div className="vdiv">
      <video className="WebOpener" autoPlay={true} loop>
      <source src="https://ik.imagekit.io/n7uszbcjpv/WebOpenerVid_f5-Gb4XXA.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662817703246" type="video/mp4" />
      </video>
    </div>
    
  );
};

export default Video;