import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";

export function Username() {
  const [username, setUsername] = useState("");
  const [toggleError, setToggleError] = useState(false);
  const [landingAnimation, setLandingAnimation] = useState(true);
  const [inputPlaceHolder, setInputPlaceHolder] = useState("username");

  const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setUsername(e.target.value);
    }
  };

  const inputClasses = classNames(
    "w-52",
    "border-0",
    "text-black",
    "font-mono",
    "font-bold",
    "text-xl",
    {
      "animate-flip-up": landingAnimation,
      "animate-once": landingAnimation,
      "animate-duration-[1200ms]": landingAnimation,
      "animate-delay-[700ms]": landingAnimation,
    },
    {
      "animate-shake": toggleError,
      "animate-duration-[200ms]": toggleError,
    }
  );

  useEffect(() => {
    if (toggleError) {
      setInputPlaceHolder("username ... (!)");
      const timer = setTimeout(() => {
        setToggleError(false);
      }, 201);
      return () => clearTimeout(timer);
    }
  }, [toggleError]);

  return (
    <div className="flex justify-center pb-4 ">
      <Input
        type="text"
        placeholder={inputPlaceHolder}
        className={inputClasses}
        value={username}
        onChange={updateUserName}
      />
      <Link to="/chat" state={{ username: username }}>
        <Button
          type="submit"
          className="text-blac font-mono font-semibold text-xl animate-flip-up animate-once animate-duration-[1200ms] animate-delay-[1000ms]"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (!username) {
              e.preventDefault();
              setToggleError(true);
              setLandingAnimation(false);
            }
          }}
        >
          get id
        </Button>
      </Link>
    </div>
  );
}
