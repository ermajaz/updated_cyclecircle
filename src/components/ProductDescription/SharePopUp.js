import React,{useEffect,useRef} from "react";
import "./SharePopUp.css";
import whatsappIcon from "../../img/whatsapp.svg";
import mailIcon from "../../img/mail.svg";
import close from "../../img/close.svg";
import phLink from "../../img/ph-link-bold.svg";

function SharePopUp({onClose}) {
  const infoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        // Clicked outside the component, you can close it here
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={infoRef} className="rectangle">
      <div className="frame">
        <div className="social">
          <div className="nimbus-whatsapp-wrapper">
            <img
              className="img"
              alt="Nimbus whatsapp"
              src={whatsappIcon}
              onClick={onClose}
            />
          </div>
        </div>
        <div className="social">
          <div className="fluent-mail-wrapper">
            <img
              className="img"
              alt="Fluent mail"
              src={mailIcon}
              onClick={onClose}
            />
          </div>
        </div>
        <div className="social">
          <div className="fluent-copy-wrapper">
            <img
              className="img"
              alt="Fluent mail"
              src={phLink}
              onClick={onClose}
            />
          </div>
        </div>
        <div className="social" style={{width:"25px"}}>
            <img
              className="img"
              alt="close icon"
              src={close}
              style={{width:"15px"}}
              onClick={onClose}
            />
        </div>
      </div>
    </div>
  );
}

export default SharePopUp;
