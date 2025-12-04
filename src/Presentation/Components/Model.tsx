import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModelProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModelProps> = ({ children }) => {
  const elRef = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    const modelRoot = document.getElementById("modal");
    modelRoot?.appendChild(elRef.current);

    return () => {
      modelRoot?.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
