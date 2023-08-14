import PresentationVideo from "../assets/videos/video-idiomas-señas.mp4";
import { useRef, useEffect } from "react";

const MainVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <>
      <div className="video-container" id="ini">
        <video
          ref={videoRef}
          className="video"
          autoPlay
          loop
          muted
          playsInline
          src={PresentationVideo}
        ></video>
      </div>
    </>
  );
};

export default MainVideo;
