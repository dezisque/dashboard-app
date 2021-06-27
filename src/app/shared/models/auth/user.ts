export interface User {
  uid?: string;
  email: string;
  password?: string;
  displayName?: string;
  photoURL?: string;
  emailVerified?: boolean;
  disabled?: boolean;
  phoneNumber?: boolean;
}
