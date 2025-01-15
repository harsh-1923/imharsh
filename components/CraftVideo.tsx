import Link from "next/link";
import React from "react";

interface CraftVideoProps {
  title: string;
  link?: string | null;
  src: string;
}

const CraftVideo = ({ title, link, src }: CraftVideoProps) => {
  return (
    <>
      {link && link != null ? (
        <Link href={link} className="relative">
          <video
            className="demo-video  -z-10"
            src={src}
            autoPlay
            loop
            muted
            controlsList="nofullscreen"
            disablePictureInPicture
            playsInline
          ></video>
          <div className="absolute left-2 bottom-2 z-10 text-black p-2 rounded-full text-xs backdrop-blur-3xl">
            {title}
          </div>
        </Link>
      ) : (
        <div className="relative">
          <video
            className="demo-video"
            src={
              "https://imharsh.s3.eu-north-1.amazonaws.com/craft/PeerlistTabs.mov"
            }
            autoPlay
            loop
            muted
            controlsList="nofullscreen"
            disablePictureInPicture
            playsInline
          ></video>
          <div className="absolute left-2 bottom-2 z-10 text-black p-2 rounded-full text-xs backdrop-blur-3xl">
            {title}
          </div>
        </div>
      )}
    </>
  );
};

export default CraftVideo;
