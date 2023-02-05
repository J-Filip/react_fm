import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  //   (we need to remove the div once the Modal is no longer being rendered) you can return a function inside of useEffect that cleans up.
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};
