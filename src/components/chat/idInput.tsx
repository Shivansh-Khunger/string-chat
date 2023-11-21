import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/modifiedInput";

import { useEffect, useState } from "react";

import { idChildProps } from "@/interfaces/idChildProps";

import clsx from "clsx";
import { ToggleStateOnRenderHook } from "@/idk/toggleStateUseEffectOnRender";

const IdInput: React.FC<idChildProps> = ({
  setProvidedID,
  providedID,
  setIDInputRecieved,
  user,
}) => {
  const [toggleError, setToggleError] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [ownIDError, setOwnIDError] = useState(false);
  const [landingAnimationDone, setlandingAnimationDone] = useState(true);
  const [inputPlaceHolder, setInputPlaceHolder] = useState("their id");

  const updateProvidedID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvidedID(e.target.value);
  };

  const inputClasses = clsx(
    // general
    "justify-centre flex h-[6.5vh] w-64 items-center rounded-xl border border-b-0 border-black font-mono text-xl font-bold text-black shadow-[0px_4.5px_0px_0px_black] outline-none transition-all duration-300 ease-in-out will-change-transform",

    // focus
    "focus:translate-y-[-1px] focus:shadow-[-2px_5.5px_0px_0px_black] focus:ease-linear",

    // active
    "active:translate-y-[2px] active:shadow-[-1.5px_3.5px_0px_0px_black] active:duration-100",

    {
      // landing animation
      "animate-fade animate-delay-[500ms] animate-duration-[1500ms] animate-once":
        landingAnimationDone,
    },

    {
      // error toggling
      " animate-shake animate-duration-[200ms]": toggleError || lengthError,
    },
  );

  const buttonClasses = clsx(
    // general
    "group flex h-[6.5vh] items-center justify-center rounded-xl border border-b-0 border-black font-mono text-xl font-semibold text-black shadow-[0px_4.5px_0px_0px_black] transition-all duration-200 ease-in-out will-change-transform",

    // focus
    "hover:-translate-y-[2px] hover:shadow-[-2px_5.5px_0px_0px_black]",

    // active
    "active:translate-y-[2px] active:shadow-[-1.5px_3.5px_0px_0px_black] active:duration-100",

    // landing animation
    {
      "animate-fade animate-delay-[700ms] animate-duration-[1500ms] animate-once":
        landingAnimationDone,
    },
  );

  useEffect(() => {
    if (toggleError) {
      setInputPlaceHolder("their id ... (!)");
      const timer = setTimeout(() => {
        setToggleError(false);
      }, 201);
      return () => clearTimeout(timer);
    }
  }, [toggleError]);

  useEffect(() => {
    if (lengthError) {
      setProvidedID("");
      setInputPlaceHolder("not a valid id (!)");
      const timer = setTimeout(() => {
        setLengthError(false);
      }, 201);
      return () => clearTimeout(timer);
    }
  }, [lengthError]);

  useEffect(() => {
    if (ownIDError) {
      setProvidedID("");
      setInputPlaceHolder("can't use own id (!)");
      const timer = setTimeout(() => {
        setOwnIDError(false);
      }, 201);
      return () => clearTimeout(timer);
    }
  }, [ownIDError]);

  ToggleStateOnRenderHook({
    value: landingAnimationDone,
    setValue: setlandingAnimationDone,
    delay: 2001,
  });

  const handleButtonClick = (e: React.MouseEvent) => {
    if (!providedID) {
      e.preventDefault();
      setToggleError(true);
    }
    if (providedID.length < 36 || providedID.length > 36) {
      setLengthError(true);
    }
    if (providedID == user.module.id) {
      setOwnIDError(true);
    }
    if (providedID.length == 36 && providedID != user.module.id) {
      setIDInputRecieved(true);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      if (!providedID) {
        e.preventDefault();
        setToggleError(true);
      }
      if (providedID.length < 36 || providedID.length > 36) {
        setLengthError(true);
      }
      if (providedID === user.module.id) {
        setOwnIDError(true);
      }
      if (providedID.length == 36 && providedID != user.module.id) {
        setIDInputRecieved(true);
      }
    }
  };

  return (
    <div className="flex justify-center gap-6 py-2">
      <Input
        type="text"
        placeholder={inputPlaceHolder}
        className={inputClasses}
        value={providedID}
        onChange={updateProvidedID}
        onKeyUp={onKeyPress}
      />

      <Button
        type="submit"
        className={buttonClasses}
        onClick={handleButtonClick}
      >
        get them
        <svg
          className="stroke-black stroke-2"
          fill="none"
          width="18"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
        >
          <path
            className="opacity-0 transition duration-300 group-hover:opacity-100"
            d="M0 5h7"
          ></path>
          <path
            className="transition duration-200 group-hover:translate-x-[7.2px]"
            d="M1 1l4 4-4 4"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

export default IdInput;
