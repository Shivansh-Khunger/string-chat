export interface ToggleStateProps {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  delay: number;
}
