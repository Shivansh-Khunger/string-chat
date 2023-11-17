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
  const [landingAnimation, setLandingAnimation] = useState(true);
  const [confirmCopy, setConfirmCopy] = useState(false);

  const containerClasses = classNames(
    "flex",
    "w-auto",
    "justify-center",
    "rounded-full",
    "border",
    "border-black",
    "bg-slate-300",
    "font-mono",
    {
      "animate-fade-down": landingAnimation,
      "animate-normal": landingAnimation,
      "animate-once": landingAnimation,
      "animate-duration[1500m]": landingAnimation,
    },
    "shadow-black",
    {
      "shadow-[0px_5px_0px_0px_black]": !clickAnimation,
      "shadow-[0px_3px_0px_0px_black]": clickAnimation,
      "translate-y-[2px]": clickAnimation,
      "duration-150": clickAnimation,
      "transition-all": clickAnimation,
      "ease-in-out": clickAnimation,
      "will-change-transform": clickAnimation,
    },
  );

  const buttonContainerClasses = classNames("rounded-xl", "border-black", {
    "shadow-[0px_3px_0px_0px_black]": !clickAnimation,
    "shadow-[0px_1px_0px_0px_black]": clickAnimation,
    "translate-y-[2px]": clickAnimation,
    "duration-150": clickAnimation,
    "transition-all": clickAnimation,
    "ease-in-out": clickAnimation,
    "will-change-transform": clickAnimation,
  });

  return (
    <div className="relative flex w-screen justify-center p-[5px]">
      <div className="mb-0 flex justify-center">
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
          <div className="flex items-center justify-center gap-2 border-black px-2">
            <div className={buttonContainerClasses}>
              <Button
                className="w-[8vh] shadow-none"
                onClick={() => {
                  navigator.clipboard.writeText(props.idString);
                  setLandingAnimation(false);
                  setClickAnimation(true);
                  const animationTimer = setTimeout(() => {
                    setClickAnimation(false);
                    setConfirmCopy(true);
                  }, 151);
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
                  setLandingAnimation(false);
                }}
                onMouseOut={() => {
                  setClickAnimation(false);
                }}
              >
                {confirmCopy ? <CheckCheck /> : <Copy />}
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
    </div>
  );
}
