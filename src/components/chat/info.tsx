import { Copy, ChevronUp, CheckCheck } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import classNames from "classnames";
interface InfoProps {
  username: string;
  idString: string;
}

export default function Info(props: InfoProps) {
  //   const username = "my63";
  //   const idString = "23dc8479-1ee2-4776-850d-28fc1ce4a107";
  const [clickAnimation, setClickAnimation] = useState(false);
  const [confirmCopy, setConfirmCopy] = useState(false);

  const containerClasses = classNames(
    "flex",
    "w-[120vh]",
    "justify-center",
    "rounded-full",
    "border",
    "border-black",
    "bg-slate-300",
    "font-mono",
    "animate-fade-down",
    "animate-normal",
    "animate-once",
    "animate-duration[1500m]",
    {
      "border-b-[5px]": !clickAnimation,
      "border-b-[3px]": clickAnimation,
    },
  );

  const buttonContainerClasses = classNames("rounded-xl", "border-black", {
    "border-b-[3px]": !clickAnimation,
    "border-b-[1px]": clickAnimation,
  });

  return (
    <div className="flex w-screen justify-center p-[5px]">
      <div className={containerClasses}>
        <div className="flex items-center justify-center border-r-2 border-dashed border-black px-2">
          <span className="text-lg font-semibold">
            your ^_^ username {" -> "} {props.username}
          </span>
        </div>
        <div className="flex items-center justify-center border-r-2 border-dashed border-black px-2">
          <div className="flex flex-col items-center justify-center">
            <span className=" text-lg">{props.idString}</span>
            <div className="flex justify-center gap-2 text-lg font-semibold">
              your unique id
              <ChevronUp />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-black pl-2">
          <div className={buttonContainerClasses}>
            <Button
              className=""
              onClick={() => {
                navigator.clipboard.writeText(props.idString);
                setClickAnimation(true);
                const animationTimer = setTimeout(() => {
                  setClickAnimation(false);
                  setConfirmCopy(true);
                }, 150);
                const confirmTimer = setTimeout(() => {
                  setConfirmCopy(false);
                }, 800);
                return () => {
                  clearTimeout(animationTimer);
                  clearTimeout(confirmTimer);
                };
              }}
              onMouseDown={() => {
                setClickAnimation(true);
              }}
              onMouseOut={() => {
                setClickAnimation(false);
              }}
            >
              {confirmCopy ? (
                <div className="animate-fade animate-duration-500 animate-once animate-ease-out">
                  <CheckCheck />
                </div>
              ) : (
                <div className="animate-fade animate-duration-500 animate-once animate-ease-out">
                  <Copy />
                </div>
              )}
              <div className="animate-fade animate-duration-500 animate-once animate-ease-out"></div>
            </Button>
          </div>
          <span className="text-lg font-semibold">
            {" "}
            {" <- "}want to copy it ?
          </span>
        </div>
      </div>
    </div>
  );
}
