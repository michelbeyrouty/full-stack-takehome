import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: any;
}

export default function Modal({ children }: ModalProps) {
  const ref = useRef(null);

  if (!ref.current) {
    ref.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot!.appendChild(ref.current!);

    return () => modalRoot!.removeChild(ref.current!);
  }, []);

  return createPortal(<div>{children}</div>, ref.current!);
}
