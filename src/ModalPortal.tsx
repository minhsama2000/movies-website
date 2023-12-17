import { createPortal } from "react-dom";
import Modal from "./components/parts/Modal/Modal";
import { CSSProperties, ReactNode } from "react";

export default function ModalPortal({
  onShowModal,
  child,
  onSubmit,
  title,
  style,
  isFooter,
}: {
  onShowModal: () => void;
  child: ReactNode;
  onSubmit: () => void;
  title: string;
  style: CSSProperties;
  isFooter: boolean;
}) {
  return createPortal(
    <Modal
      onShowModal={onShowModal}
      child={child}
      onSubmit={onSubmit}
      title={title}
      style={style}
    />,
    document.getElementsByClassName("container")[0]
  );
}
