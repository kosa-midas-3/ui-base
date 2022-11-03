import { useEffect, useRef, useState } from "react";

const useModal = (modalId: string) => {
  const [open, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const modalDiv = document.createElement("div");
    modalDiv.setAttribute("id", modalId);
    modalRef.current = body.insertBefore(modalDiv, body.firstChild);
    return () => {
      if (modalDiv) {
        body.removeChild(modalDiv);
      }
    };
  }, []);
  return { open, setIsOpen, modalRef };
};

export default useModal;
