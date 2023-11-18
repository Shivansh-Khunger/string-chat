import IdInput from "./idInput";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { idChildProps } from "@/interfaces/idChildProps";
import { ToggleStateOnStateChangeHook } from "@/idk/toggleStateUseEffectOnRender";

const WaitingConnection: React.FC<idChildProps> = ({
  setProvidedID,
  providedID,
  setIDInputRecieved,
}) => {
  const [waitingDown, setWaitingDown] = useState(false);

  const waitingClasses = classNames([
    "flex",
    "justify-center",
    "gap-2",
    "rounded-2xl",
    "border-2",
    "border-black",
    "p-2",
    "text-4xl",
    "absolute",
    "will-change-transform",
    {
      "shadow-[0px_-3px_0px_0px_black]": !waitingDown,
      "shadow-[0px_-5px_0px_0px_black]": waitingDown,
      "translate-y-[2px]": waitingDown,
    },
  ]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setWaitingDown((prevValue) => {
  //       return !prevValue;
  //     });
  //   }, 900);
  //   return () => clearTimeout(timeout);
  // }, [waitingDown]);

  ToggleStateOnStateChangeHook({
    value: waitingDown,
    setValue: setWaitingDown,
    delay: 900,
  });

  return (
    <div>
      <div className="flex justify-center text-3xl">
        <div
          className="m-2 flex items-center justify-center rounded-2xl border-2 border-b-[5px]
            border-black p-2 text-4xl"
        >
          <div className="flex-col gap-2">
            <div className="flex justify-center">
              want to connect to somebody?
            </div>
            <IdInput
              setProvidedID={setProvidedID}
              providedID={providedID}
              setIDInputRecieved={setIDInputRecieved}
            />
          </div>
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
