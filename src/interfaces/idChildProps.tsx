import { User } from "./user";
export interface idChildProps {
  providedID: string;
  setProvidedID: (value: string) => void;
  setIDInputRecieved: (value: boolean) => void;
  user: User;
}
