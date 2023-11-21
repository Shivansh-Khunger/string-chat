import clsx from "clsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LoadingProps {
  transition: boolean;
}

const ConnectionToPeerFailed: React.FC<LoadingProps> = ({ transition }) => {
  let navigate = useNavigate();
  const containerClasses = clsx(
    "flex h-full w-full items-center justify-center overflow-hidden",
    {
      "animate-fade-up animate-delay-200 animate-duration-[750ms] animate-once":
        !transition,
    },
    {
      "animate-fade-down animate-reverse animate-duration-[200ms] animate-once":
        transition,
    },
  );


  return (
    <div className={containerClasses}>
      <div className="flex justify-center p-[5px]">
        <div className=" flex h-[20vh] min-w-[60vh] flex-col items-center justify-center gap-2 rounded-full border border-b-[5.5px] border-black bg-slate-300 p-8 font-mono text-2xl font-bold">
          <div>
            {" "}
            connection to Peer failed{" "}
            <span className="font-semibold"> 눈_눈</span>
          </div>
          <div className="flex items-center justify-center">
            we are taking you back to waiting page &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionToPeerFailed;
