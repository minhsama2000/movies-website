import { useEffect } from "react";
import util from "../../utils/utils";

export default function AIframe(props: {
  url: string;
  autoPlay: string;
  muted: string;
}) {
  const { concatStringIgnoreNull } = util();

  useEffect(() => {
    props.url + "?" + concatStringIgnoreNull("&", props.autoPlay, props.muted);
  }, []);

  return (
    <>
      <iframe
        src={
          props.url +
          "?" +
          concatStringIgnoreNull("&", props.autoPlay, props.muted)
        }
        allow="autoplay; encrypted-media"
      ></iframe>
    </>
  );
}
