import { useRef } from "react";

function TestDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
}) {
  return (
    <dialog
      open={isOpen}
      className={` fixed top-0 z-50 ${isOpen ? "flex" : ""} `}
    >
      AAAAAAAAAAAAAAAAb
    </dialog>
  );
}

export default TestDialog;
