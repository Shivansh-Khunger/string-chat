import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { idChildProps } from "@/interfaces/childProps";

const IdInput: React.FC<idChildProps> = ({
  setProvidedID,
  providedID,
  setIDInputRecieved,
}) => {
  // const [username, setUsername] = useState("");
  const [toggleError, setToggleError] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [landingAnimation, setLandingAnimation] = useState(true);
  const [inputPlaceHolder, setInputPlaceHolder] = useState("their id");
  const [textClickAnimation, settextClickAnimation] = useState(false);
  const [buttonClickAnimation, setButtonClickAnimation] = useState(false);

  const updateProvidedID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvidedID(e.target.value);
  };

  const inputClasses = classNames(
    "w-52",
    "text-black",
    "font-mono",
    "font-bold",
    "text-xl",
    "border-0",
    "shadow-none",
    "w-[28vh]",
    {
      "animate-shake": toggleError || lengthError,
      "animate-duration-[200ms]": toggleError || lengthError,
    },
  );

  const inputContainerClasses = classNames(
    "h-[6.5vh]",
    "rounded-xl",
    "border-black",
    "flex",
    "justify-centre",
    "items-center",
    "border",
    // {
    //   "animate-flip-up": landingAnimation,
    //   "animate-once": landingAnimation,
    //   "animate-duration-[1700ms]": landingAnimation,
    //   "animate-delay-[700ms]": landingAnimation,
    // },
    {
      "border-b-[5px]": !textClickAnimation,
      "border-b-[3.5px]": textClickAnimation,
    },
  );

  const buttonClasses = classNames(
    "font-mono",
    "text-xl",
    "font-semibold",
    "text-black",
    "border-0",
    "shadow-none",
  );

  const buttonContainerClasses = classNames(
    "flex",
    "h-[6.5vh]",
    // "animate-flip-up",
    "items-center",
    "justify-center",
    "rounded-xl",
    "border",
    "border-black",
    // "animate-delay-[1000ms]",
    // "animate-duration-[1700ms]",
    // "animate-once",
    {
      "border-b-[5px]": !buttonClickAnimation,
      "border-b-[3.5px]": buttonClickAnimation,
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
      <div className={inputContainerClasses}>
        <Input
          type="text"
          placeholder={inputPlaceHolder}
          className={inputClasses}
          value={providedID}
          onChange={updateProvidedID}
          onClick={() => {
            settextClickAnimation(true);
            const clickAnimationTimer = setTimeout(() => {
              settextClickAnimation(false);
            }, 90);
            return () => clearTimeout(clickAnimationTimer);
          }}
          onMouseDown={() => {
            settextClickAnimation(true);
          }}
          onMouseOut={() => {
            settextClickAnimation(false);
          }}
        />
      </div>

      <div className={buttonContainerClasses}>
        <Button
          type="submit"
          className={buttonClasses}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            setButtonClickAnimation(true);
            const clickAnimationTimer = setTimeout(() => {
              setButtonClickAnimation(false);
            }, 100);
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
          onMouseDown={() => {
            setButtonClickAnimation(true);
          }}
          onMouseOut={() => {
            setButtonClickAnimation(false);
          }}
        >
          get them
        </Button>
      </div>
    </div>
  );
};

export default IdInput;
