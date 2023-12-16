import { CSSProperties, ReactNode } from "react";
import style from "./button.module.scss";

export default function Button({
  type,
  title,
  onHandleButton,
  className,
  styleCustom,
}: {
  type: string;
  title: ReactNode;
  onHandleButton: () => void;
  className: string;
  styleCustom: CSSProperties;
}) {
  return (
    <>
      <button
        type={type}
        onClick={onHandleButton}
        className={style.button + " " + style[className]}
        style={styleCustom}
      >
        {title}
      </button>
    </>
  );
}
