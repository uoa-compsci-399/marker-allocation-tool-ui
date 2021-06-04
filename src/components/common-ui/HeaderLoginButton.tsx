const HeaderLoginButton = (): JSX.Element => {
  return (
    <div>
      <a
        className="text-white hover:text-gray-300 mr-12 text-lg"
        href={`${process.env.REACT_APP_API_DOMAIN}/api/authn/login`}
      >
        Login
      </a>
    </div>
  );
};

export default HeaderLoginButton;
