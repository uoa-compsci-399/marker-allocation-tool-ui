import { useUserContext } from 'context/UserContext';

const HeaderLogoutButton = (): JSX.Element => {
  const { setUserData } = useUserContext();
  return (
    <button
      className="text-white hover:text-gray-300 ml-12 text-lg"
      onClick={async (): Promise<void> => {
        setUserData(null);
      }}
    >
      Logout
    </button>
  );
};

export default HeaderLogoutButton;
