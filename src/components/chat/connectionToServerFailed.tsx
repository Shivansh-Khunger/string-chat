import clsx from "clsx";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const ConnectionToServerFailed = () => {
  let navigate = useNavigate();
  const containerClasses = clsx(
    "flex h-full w-full items-center justify-center overflow-hidden",
    "animate-fade-up animate-delay-200 animate-duration-[750ms] animate-once",
  );

  const buttonClasses = clsx(
    // general
    "group flex h-[5.5vh] items-center justify-center rounded-full border border-b-0 border-black font-mono text-xl font-semibold text-black shadow-[0px_4.5px_0px_0px_black] transition-all duration-300 ease-in-out will-change-transform",

    // hover
    "hover:-translate-y-[2px] hover:shadow-[2px_5.5px_0px_0px_black]",

    // active
    "active:translate-y-[2px] active:shadow-[1.5px_3.5px_0px_0px_black] active:duration-100",
  );

  const handleButtonClick = () => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 201);
    return () => clearTimeout(timer);
  };

  return (
    <div className={containerClasses}>
      <div className="flex justify-center p-[5px]">
        <div className=" flex h-[20vh] min-w-[60vh] flex-col items-center justify-center gap-2 rounded-full border border-b-[5.5px] border-black bg-slate-300 p-8 font-mono text-2xl font-bold">
          <div>
            {" "}
            connection to server failed{" "}
            <span className="font-semibold"> 눈_눈</span>
          </div>
          <div className="flex items-center justify-center">
            you should start over &nbsp;
            <Button className={buttonClasses} onClick={handleButtonClick}>
              {" "}
              <div className="ml-2 scale-150">
                <svg
                  className="stroke-black stroke-2"
                  fill="none"
                  width="25"
                  height="10"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                >
                  <path
                    className="opacity-0 transition duration-300 group-hover:opacity-100"
                    d="M0 5h7"
                  ></path>
                  <path
                    className="transition duration-200 group-hover:-translate-x-[7.2px]"
                    d="M5 1l-4 4 4 4"
                  ></path>
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionToServerFailed;
