// components/Button.tsx
import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="open-modal-button">
      {label}
      <style jsx>{`
        .open-modal-button {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .open-modal-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </button>
  );
};

export default Button;
