import { CSSProperties, ReactNode } from "react";
import "./modal.scss";
import Button from "../Button/Button";

export default function Modal({
  title,
  onShowModal,
  child,
  onSubmit,
  style,
  isFooter,
}: {
  title: string;
  onShowModal: () => void;
  child: ReactNode;
  onSubmit: () => void;
  style: CSSProperties;
  isFooter: boolean;
}) {
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{title}</h2>
            <span className="close" onClick={onShowModal}>
              &times;
            </span>
          </div>
          <div className="modal-body" style={style}>
            {child}
          </div>
          {isFooter ? (
            <div className="modal-footer">
              <div className="submit-button">
                <Button
                  title="Submit"
                  type="button"
                  onHandleButton={onSubmit}
                  className="button-primary"
                  styleCustom={{}}
                />
              </div>
              <div className="close-button">
                <Button
                  title="Close"
                  type="button"
                  onHandleButton={onShowModal}
                  className="button-danger"
                  styleCustom={{}}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
