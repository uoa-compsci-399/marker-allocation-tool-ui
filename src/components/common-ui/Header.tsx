import logo from './assets/classe-logo.png';

const Header = (): JSX.Element => {
  // To make it fixed at the top: sticky top-0 z-50
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between p-6 bg-blue-600 shadow-lg">
      <div className="flex items-center mr-6 text-white flex-no-shrink">
        <a href="/dashboard">
          <img src={logo} alt="Classe Logo" className="max-h-16" />
        </a>
        <a href="/dashboard" className="m-4 text-3xl font-semibold tracking-tight">
          Classe
        </a>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto" />
    </nav>
  );
};

export default Header;
