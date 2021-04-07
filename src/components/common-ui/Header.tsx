import React from 'react';

const Header = (): JSX.Element => {
  // To make it fixed at the top: sticky top-0 z-50
  return (
    <nav className="flex sticky top-0 z-50 shadow-lg items-center justify-between flex-wrap bg-blue-600 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <a href="/" className="font-semibold text-3xl tracking-tight">
          Classe
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/apply"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4"
          >
            Apply
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
