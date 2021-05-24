import { createContext, useContext } from 'react';
import { Auth } from 'models/Auth';

export type AuthContent = {
  authenticated: boolean;
  userData: Auth | undefined;
  setUserData: (a: any) => void;
};

export const UserContext = createContext<AuthContent>({
  authenticated: false,
  userData: undefined,
  setUserData: () => undefined,
});

export const useUserContext = (): any => useContext(UserContext);
