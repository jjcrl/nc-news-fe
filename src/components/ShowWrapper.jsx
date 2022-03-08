import { useState } from "react";

export const ShowWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <>
      <button id="toggle-comments" onClick={toggleOpen}>
        {isOpen ? "Hide Comment" : "Show Comments"}
      </button>
      {isOpen && children}
    </>
  );
};