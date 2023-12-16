import { useEffect } from "react";

export default function AVideo({
  props,
  isDisplay,
}: {
  props: { url: string; autoPlay: boolean; muted: boolean };
  isDisplay: boolean;
}) {
  let video = document.getElementsByTagName("video");

  useEffect(() => {
    if (video && isDisplay) {
      video[0].play();
    } else if (video && !isDisplay) {
      video[0].pause();
    }
  }, [isDisplay]);

  return (
    <>
      <video
        id="trailer_video"
        src={props.url}
        autoPlay={props.autoPlay}
        muted={props.muted}
      ></video>
    </>
  );
}
