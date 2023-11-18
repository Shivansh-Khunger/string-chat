import { useEffect } from "react";

import { ToggleStateProps } from "@/interfaces/toggleStateProps";

export const toggleStateHook = ({
  value,
  setValue,
  delay,
}: ToggleStateProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);
};
