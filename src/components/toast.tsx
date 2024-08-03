import React, { useEffect, useRef } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import "./toast.css";
import { ToastProps } from "./types";

const iconStyles: React.CSSProperties = { marginRight: "10px" };
const icons: Record<string, JSX.Element> = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

const animations: Record<string, string> = {
  fade: "fadeIn",
  pop: "popup",
  slide: "slideIn",
};

const Toast: React.FC<ToastProps> = ({
  type = "info",
  message,
  onClose = () => {}, // Default empty function
  animation = "slide",
}) => {
  
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.focus();
    }
  }, []);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive = type === "error" || type === "warning" ? "assertive" : "polite";

  return (
    <div
      className={`toast ${type} ${animations[animation]}`}
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex={-1}
      ref={toastRef}
    >
      {icons[type]} {message}
      <button
        aria-label="Close toast"
        className="closeBtn"
        onClick={() => onClose()} // Ensure onClose is called
      >
        <AiOutlineClose color="white" />
      </button>
    </div>
  );
};

export default Toast;
