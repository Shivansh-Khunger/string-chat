import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/modifiedInput";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ToggleStateOnRenderHook } from "@/idk/toggleStateUseEffectOnRender";

interface messageInputProps {
  setTypedMessage: React.Dispatch<React.SetStateAction<string>>;
  setSendMessage: React.Dispatch<React.SetStateAction<boolean>>;
  typedMessage: string;
}

const MessageInput: React.FC<messageInputProps> = ({
  setTypedMessage,
  typedMessage,
  setSendMessage,
}) => {
  const [toggleError, setToggleError] = useState(false);
  const [inputPlaceHolder, setInputPlaceHolder] = useState("your message");
  const [landingAnimationDone, setlandingAnimationDone] = useState(true);

  const updateTypedMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedMessage(e.target.value);
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key == "Enter") {
      setSendMessage(true);
    }
  };

  const inputClasses = clsx(
    // general
    "justify-centre flex h-[6.5vh] w-[50rem] items-center rounded-xl border border-b-0 border-black font-mono text-xl font-bold text-black shadow-[0px_4.5px_0px_0px_black] outline-none transition-all duration-200 ease-in-out will-change-transform",

    // focus
    {
      "focus:translate-y-[-1px] focus:shadow-[-2px_5.5px_0px_0px_black] focus:ease-linear":
        !landingAnimationDone,
    },

    // active
    {
      "active:translate-y-[2px] active:shadow-[-1.5px_3.5px_0px_0px_black] active:duration-100":
        !landingAnimationDone,
    },

    {
      // landing animation
      "animate-fade-down animate-delay-[500ms] animate-duration-[800ms] animate-once":
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
      "active:translate-y-[2px] active:shadow-[-1.5px_3.5px_0px_0px_black] active:duration-100":
        !landingAnimationDone,
    },

    // landing animation
    {
      "animate-fade-left animate-delay-[800ms] animate-duration-[800ms] animate-once":
        landingAnimationDone,
    },
  );

  ToggleStateOnRenderHook({
    value: landingAnimationDone,
    setValue: setlandingAnimationDone,
    delay: 1601,
  });

  useEffect(() => {
    if (toggleError) {
      setInputPlaceHolder("your message ... (!)");
      const timer = setTimeout(() => {
        setToggleError(false);
      }, 201);
      return () => clearTimeout(timer);
    }
  }, [toggleError]);

  return (
    <div className="flex h-[7%] justify-center gap-6 pb-4">
      <Input
        type="text"
        placeholder={inputPlaceHolder}
        className={inputClasses}
        value={typedMessage}
        onChange={updateTypedMessage}
        onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
          onEnterPress(e);
        }}
      />

      <Button
        type="submit"
        className={buttonClasses}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!typedMessage) {
            e.preventDefault();
            setToggleError(true);
          } else {
            setTimeout(() => {
              setSendMessage(true);
            }, 150);
          }
        }}
      >
        send text
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
};

export default MessageInput;
