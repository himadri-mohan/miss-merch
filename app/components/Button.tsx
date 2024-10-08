import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-pink-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
    >
      {label}
    </button>
  );
};

export default Button;
