import React from 'react';

interface ButtonProps {
  size?: string;
  colour?: string;
  textColour?: string;
  title: string;
}

const Button = ({
  size,
  colour = 'blue',
  textColour = 'white',
  title,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`w-32 h-12 bg-${colour}-500 hover:bg-${colour}-600 text-${textColour} text-xl font-bold py-2 px-4 rounded transition ease-in duration-200 focus:outline-none`}
    >
      {title}
    </button>
  );
};

export default Button;
