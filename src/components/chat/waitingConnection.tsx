import IdInput from "./idInput";
import { useState } from "react";
import clsx from "clsx";
import { idChildProps } from "@/interfaces/idChildProps";
import {
  ToggleStateOnRenderHook,
  ToggleStateOnStateChangeHook,
} from "@/custom hooks/toggleStateUseEffectOnRender";

const WaitingConnection: React.FC<idChildProps> = ({
  setProvidedID,
  providedID,
  setIDInputRecieved,
  user,
}) => {
  const [iswaitingContainerDown, setIswaitingContainerDown] = useState(false);
  const [landingAnimationDone, setlandingAnimationDone] = useState(false);

  const waitingClasses = clsx([
    " flex justify-center gap-2 rounded-2xl border-2 border-t-0 border-black p-2 text-4xl transition-all will-change-transform ",
    {
      "animate-fade-down animate-delay-700 animate-duration-500":
        !landingAnimationDone,
    },
    {
      "shadow-[0px_-3px_0px_0px_black] ": !iswaitingContainerDown,
      "translate-y-[2px] shadow-[0px_-5px_0px_0px_black]":
        iswaitingContainerDown,
    },
  ]);

  ToggleStateOnStateChangeHook({
    value: iswaitingContainerDown,
    setValue: setIswaitingContainerDown,
    delay: 900,
  });

  ToggleStateOnRenderHook({
    value: landingAnimationDone,
    setValue: setlandingAnimationDone,
    delay: 1801,
  });

  return (
    <div className="animate-fade animate-duration-500">
      <div
        className="m-2 mb-4 flex animate-fade-down items-center justify-center rounded-2xl
            border-2 border-black p-2 text-4xl shadow-[0px_3.5px_0px_0px_black] animate-delay-500 animate-duration-500"
      >
        <div className="flex-col gap-2">
          <div className="flex justify-center">
            want to connect to somebody?
          </div>
          <IdInput
            setProvidedID={setProvidedID}
            providedID={providedID}
            setIDInputRecieved={setIDInputRecieved}
            user={user}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className={waitingClasses}>
          waiting for a connection <span>{":( •ᾥ•):"}</span>
        </div>
      </div>
    </div>
  );
};

export default WaitingConnection;
