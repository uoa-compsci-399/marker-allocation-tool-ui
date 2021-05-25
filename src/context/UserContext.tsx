import { createContext, useContext } from 'react';
import { UserInfo } from 'models/Auth';

export type AuthContent = {
  userData: UserInfo | undefined;
  setUserData: (a: any) => void;
};

export const UserContext = createContext<AuthContent>({
  userData: undefined,
  setUserData: () => undefined,
});

export const useUserContext = (): any => useContext(UserContext);
