import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/modifiedInput";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import clsx from "clsx";

import { ToggleStateOnRenderHook } from "@/idk/toggleStateUseEffectOnRender";

export function Username() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [toggleError, setToggleError] = useState(false);
  const [landingAnimationDone, setlandingAnimationDone] = useState(true);
  const [inputPlaceHolder, setInputPlaceHolder] = useState("username");

  const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const inputClasses = clsx(
    // general
    "justify-centre flex h-[6.5vh] w-52 items-center rounded-xl border border-b-0 border-black font-mono text-xl font-bold text-black shadow-[0px_4.5px_0px_0px_black] outline-none transition-all duration-200 ease-in-out will-change-transform",

    // focus
    {
      "focus:translate-y-[-1px] focus:shadow-[-2px_5.5px_0px_0px_black] focus:ease-linear":
        !landingAnimationDone,
    },

    // active
    {
      "active:translate-y-[2px] active:shadow-[0px_3.5px_0px_0px_black] active:duration-100":
        !landingAnimationDone,
    },

    {
      // landing animation
      "animate-fade-up animate-delay-[500ms] animate-duration-[1500ms] animate-once":
        landingAnimationDone,
    },

    {
      // error toggling
      " animate-shake animate-duration-[200ms]": toggleError,
    },
  );

  const buttonClasses = clsx(
    // general
    "group flex h-[6.5vh] items-center justify-center rounded-xl border border-b-0 border-black font-mono text-xl font-semibold text-black shadow-[0px_4.5px_0px_0px_black] transition-all duration-300 ease-in-out will-change-transform",

    // hover
    {
      "hover:-translate-y-[2px] hover:shadow-[-2px_5.5px_0px_0px_black]":
        !landingAnimationDone,
    },

    // active
    {
      "active:translate-y-[2px] active:shadow-[0px_3.5px_0px_0px_black] active:duration-100":
        !landingAnimationDone,
    },

    // landing animation
    {
      "animate-fade-up animate-delay-[800ms] animate-duration-[1500ms] animate-once":
        landingAnimationDone,
    },
  );

  function onEnterPress(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key == "Enter") {
      navigate("/chat", { state: { username: username } });
    }
  }

  useEffect(() => {
    if (toggleError) {
      setInputPlaceHolder("username ... (!)");
      const timer = setTimeout(() => {
        setToggleError(false);
      }, 201);
      return () => clearTimeout(timer);
    }
  }, [toggleError]);

  ToggleStateOnRenderHook({
    value: landingAnimationDone,
    setValue: setlandingAnimationDone,
    delay: 2101,
  });

  return (
    <div className="mb-4 flex items-center justify-center gap-6">
      <Input
        type="text"
        placeholder={inputPlaceHolder}
        className={inputClasses}
        value={username}
        onChange={updateUserName}
        onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
          onEnterPress(e);
        }}
        disabled={landingAnimationDone}
      />
      <Button
        type="submit"
        className={buttonClasses}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!username) {
            e.preventDefault();
            setToggleError(true);
          } else {
            setTimeout(() => {
              navigate("/chat", { state: { username: username } });
            }, 150);
          }
        }}
        disabled={landingAnimationDone}
      >
        get id
        <div className="ml-2 scale-150">
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
        </div>
      </Button>
    </div>
  );
}
