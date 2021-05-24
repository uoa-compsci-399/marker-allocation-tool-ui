import React from 'react';

interface HeaderLoggedinProps {
  name: string;
}

const HeaderLoggedin = ({ name }: HeaderLoggedinProps): JSX.Element => {
  return <div className="text-white text-lg">Hi, {name}!</div>;
};

export default HeaderLoggedin;
