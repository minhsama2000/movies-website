import { memo, useEffect, useState } from "react";
import Content from "../../main/content_header/Content";
import AVideo from "../../parts/Avideo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsPlayVideo } from "../../../store/movie/state";
import './header.scss'

const Header = memo(function Header() {
  const [videoProps, setVideoProps] = useState({
    url: "/videos/theboys.webm",
    autoPlay: true,
    muted: true,
  });
  const isPlayVideo = useSelector((state) => state.movies.isPlayVideo);
  const dispatch = useDispatch();
  const isDisableContent = useSelector(
    (state) => state.movies.isDisableContent
  );
  const isDisableVideo = useSelector((state) => state.movies.isDisableVideo);

  const watchTrailler = () => {
    dispatch(setIsPlayVideo());
  };

  useEffect(() => {
  }, [isDisableVideo, isDisableContent]);

  return (
    <>
      <header>
        {isDisableVideo ? (
          ""
        ) : (
          <AVideo props={videoProps} isDisplay={isPlayVideo} />
        )}

        {isDisableContent ? "" : <Content watchTrailler={watchTrailler} />}
      </header>
    </>
  );
});

export default Header;
