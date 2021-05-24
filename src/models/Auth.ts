export interface Auth {
  authenticated: boolean;
  user: UserInfo | undefined;
}

interface UserInfo {
  userID: number;
  firstName: string;
  lastName: string;
  email: string;
  upi: string;
  role: string;
}
