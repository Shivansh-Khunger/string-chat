import { Copy, ChevronUp, CheckCheck } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import clsx from "clsx";
import { ToggleStateOnRenderHook } from "@/idk/toggleStateUseEffectOnRender";

import { InfoProps } from "@/interfaces/infoProps";

const Info: React.FC<InfoProps> = ({
  newUser,
  connectionMade,
  connectedUsername,
}) => {
  //   const username = "my63";
  //   const idString = "23dc8479-1ee2-4776-850d-28fc1ce4a107";
  const [landingAnimationDone, setlandingAnimationDone] = useState(true);
  const [confirmCopy, setConfirmCopy] = useState(false);
  const [copyExitAnimation, setCopyExitAnimation] = useState(false);

  const containerClasses = clsx(
    // general
    "group flex w-auto justify-center rounded-3xl border border-black bg-slate-300 font-mono shadow-[0px_4.5px_0px_0px_black] transition-all ease-in-out will-change-transform",

    // landing
    {
      "animate-duration[1500ms] animate-fade-down animate-normal animate-once":
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

  const copyConfirmButtonClasses = clsx({
    "animate-jump-in": copyExitAnimation,
    "animate-jump-out": !copyExitAnimation,
  });

  ToggleStateOnRenderHook({
    value: landingAnimationDone,
    setValue: setlandingAnimationDone,
    delay: 1501,
  });

  return (
    <div className="relative flex w-screen justify-center p-[5px]">
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
    </div>
  );
};

export default Info;
