import { User } from "./user";

export interface InfoProps {
  newUser: User;
  connectionMade: boolean;
  setConnectionMade: React.Dispatch<React.SetStateAction<boolean>>;
  connectedUsername: string;
}
