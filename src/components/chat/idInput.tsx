import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

import { idChildProps } from "@/interfaces/idChildProps";

import clsx from "clsx";

const IdInput: React.FC<idChildProps> = ({
  setProvidedID,
  providedID,
  setIDInputRecieved,
}) => {
  const [toggleError, setToggleError] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [landingAnimation, setLandingAnimation] = useState(true);
  const [inputPlaceHolder, setInputPlaceHolder] = useState("their id");

  const updateProvidedID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvidedID(e.target.value);
  };

  const inputClasses = clsx(
    // general
    "justify-centre flex h-[6.5vh] w-52 items-center rounded-xl border border-b-0 border-black font-mono text-xl font-bold text-black shadow-[0px_4.5px_0px_0px_black] outline-none transition-all duration-300 ease-in-out will-change-transform",

    // focus
    "focus:translate-y-[-1px] focus:shadow-[-2px_5.5px_0px_0px_black] focus:ease-linear",

    // active
    "active:translate-y-[2px] active:shadow-[0px_3.5px_0px_0px_black] active:duration-100",

    {
      // landing animation
      "animate-fade-up animate-delay-[700ms] animate-duration-[1500ms] animate-once":
        landingAnimation,
    },

    {
      // error toggling
      " animate-shake animate-duration-[200ms]": toggleError,
    },
  );

  const buttonClasses = clsx(
    // general
    "group flex h-[6.5vh] items-center justify-center rounded-xl border border-b-0 border-black font-mono text-xl font-semibold text-black shadow-[0px_4.5px_0px_0px_black] transition-all duration-300 ease-in-out will-change-transform",

    // focus
    "hover:-translate-y-[2px] hover:shadow-[-2px_5.5px_0px_0px_black]",

    // active
    "active:translate-y-[2px] active:shadow-[0px_3.5px_0px_0px_black] active:duration-100",

    // landing animation
    {
      "animate-fade-up animate-delay-[1000ms] animate-duration-[1500ms] animate-once":
        landingAnimation,
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
      setInputPlaceHolder("not a valid id (!)");
      setProvidedID("");
      console.log("inside lenght error");
      const timer = setTimeout(() => {
        setLengthError(false);
      }, 201);
      return () => clearTimeout(timer);
    }
  }, [lengthError]);

  return (
    <div className="flex justify-center gap-6 pb-4">
      <Input
        type="text"
        placeholder={inputPlaceHolder}
        className={inputClasses}
        value={providedID}
        onChange={updateProvidedID}
      />

      <Button
        type="submit"
        className={buttonClasses}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!providedID) {
            e.preventDefault();
            setToggleError(true);
            setLandingAnimation(false);
          }
          if (providedID.length < 36 || providedID.length > 36) {
            setLengthError(true);
          }
          if (providedID.length == 36) {
            setIDInputRecieved(true);
          }
        }}
      >
        get them
      </Button>
    </div>
  );
};

export default IdInput;
