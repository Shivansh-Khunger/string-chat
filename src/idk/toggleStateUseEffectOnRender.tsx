import { useEffect } from "react";

import { ToggleStateProps } from "@/interfaces/toggleStateProps";

export const ToggleStateOnRenderHook = ({
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

export const ToggleStateOnStateChangeHook = ({
  value,
  setValue,
  delay,
}: ToggleStateProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((prevValue) => {
        return !prevValue;
      });
    }, delay);
    return () => clearTimeout(timer);
  }, [value]);
};
