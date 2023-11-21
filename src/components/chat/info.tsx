import { Copy, ChevronUp, CheckCheck } from "lucide-react";
import { Button } from "../ui/button";
import React, { useState } from "react";
import clsx from "clsx";
import { ToggleStateOnRenderHook } from "@/custom hooks/toggleStateUseEffectOnRender";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { InfoProps } from "@/interfaces/infoProps";

const Info: React.FC<InfoProps> = ({
  newUser,
  connectionMade,
  connectedUsername,
}) => {
  const [landingAnimationDone, setlandingAnimationDone] = useState(true);
  const [confirmCopy, setConfirmCopy] = useState(false);
  const [copyExitAnimation, setCopyExitAnimation] = useState(false);
  let navigate = useNavigate();

  const containerClasses = clsx(
    // general
    "group flex w-auto justify-center rounded-3xl border border-black bg-slate-300 font-mono shadow-[0px_4.5px_0px_0px_black] transition-all ease-in-out will-change-transform",

    // landing
    {
      "animate-duration[800ms] animate-fade-down animate-normal animate-once":
        landingAnimationDone,
    },

    //hover
    {
      "hover:-translate-y-[1.5px] hover:shadow-[0px_5.5px_0px_0px_black] hover:duration-150 hover:ease-in-out":
        !landingAnimationDone,
    },
  );

  const buttonContainerClasses = clsx(
    // general
    "group flex items-center justify-center rounded-xl border border-b-0 border-black font-mono text-xl font-semibold text-black shadow-[0px_4.5px_0px_0px_black] transition-all duration-300 ease-in-out will-change-transform",

    // active
    {
      "active:translate-y-[2px] active:shadow-[0px_3.5px_0px_0px_black] active:duration-100":
        !landingAnimationDone,
    },

    // hover
    {
      "hover:-translate-y-[2px] hover:shadow-[0px_5.5px_0px_0px_black]":
        !landingAnimationDone,
    },
  );

  const buttonClasses = clsx(
    // general
    "group flex h-[4.5vh] items-center justify-center rounded-xl border border-b-0 border-black font-mono text-xl font-semibold text-black shadow-[0px_4.5px_0px_0px_black] transition-all duration-300 ease-in-out will-change-transform",

    // hover
    {
      "hover:-translate-y-[2px] hover:shadow-[2px_5.5px_0px_0px_black]":
        !landingAnimationDone,
    },

    // active
    {
      "active:translate-y-[2px] active:shadow-[1.5px_3.5px_0px_0px_black] active:duration-100":
        !landingAnimationDone,
    },

    // landing animation
    {
      "animate-fade-down animate-duration-[800ms] animate-once":
        landingAnimationDone,
    },
  );

  const copyConfirmButtonClasses = clsx({
    "animate-jump-in": copyExitAnimation,
    "animate-jump-out": !copyExitAnimation,
  });

  ToggleStateOnRenderHook({
    value: landingAnimationDone,
    setValue: setlandingAnimationDone,
    delay: 1501,
  });

  const handleButtonClick = () => {
    newUser.module.disconnect();
    newUser.module.destroy();
    navigate("/");
  };

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="relative flex w-full justify-center p-[5px]">
          <div className="mb-0 flex justify-center">
            <div className={containerClasses}>
              <div className="flex items-center justify-center border-r-2 border-dashed border-black px-2">
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">
                    your ^_^ username {" -> "} {newUser.username}
                  </span>
                  {connectionMade && connectedUsername ? (
                    <span className="mb-1 text-lg font-semibold">
                      connected to ^_^ {" -> "} {connectedUsername}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-center border-r-2 border-dashed border-black px-2">
                <div className="flex flex-col items-center justify-center">
                  <span className=" text-lg">{newUser.module.id}</span>
                  <div className="flex justify-center gap-2 text-lg font-semibold">
                    your unique id
                    <ChevronUp />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 border-black px-2">
                <div className={buttonContainerClasses}>
                  <Button
                    className="w-[8vh] shadow-none"
                    onClick={() => {
                      navigator.clipboard.writeText(newUser.module.id);
                      setConfirmCopy(true);
                      setCopyExitAnimation(true);

                      const copyExitTimer = setTimeout(() => {
                        setCopyExitAnimation(false);
                      }, 500);

                      const confirmTimer = setTimeout(() => {
                        setConfirmCopy(false);
                      }, 800);
                      return () => {
                        clearTimeout(confirmTimer);
                        clearTimeout(copyExitTimer);
                      };
                    }}
                  >
                    {confirmCopy ? (
                      <CheckCheck className={copyConfirmButtonClasses} />
                    ) : (
                      <Copy />
                    )}
                    <div className="animate-fade animate-duration-500 animate-once animate-ease-out"></div>
                  </Button>
                </div>
                <span className="text-lg font-semibold">
                  {" "}
                  &lt;- want to copy it ?
                </span>
              </div>
            </div>
          </div>
          <div className="absolute right-5 top-0 flex h-full items-center justify-center bg-slate-300">
            <Button
              className={buttonClasses}
              title="terminate session"
              onClick={handleButtonClick}
            >
              <Plus className="rotate-45 transition-all duration-300 group-hover:-rotate-45 group-active:rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Info;
