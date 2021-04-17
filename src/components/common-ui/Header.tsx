import React from 'react';

import logo from './assets/classe-logo.png';

const Header = (): JSX.Element => {
  // To make it fixed at the top: sticky top-0 z-50
  return (
    <nav className="flex sticky top-0 z-50 shadow-lg items-center justify-between flex-wrap bg-blue-600 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <a href="/">
          <img src={logo} alt="Classe Logo" className="max-h-16" />
        </a>
        <a href="/" className="font-semibold text-3xl tracking-tight m-4">
          Classe
        </a>
        <a href="/courses" className="font-medium text-xl mx-8">
          Courses
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" />
    </nav>
  );
};

export default Header;
