interface LoadingProps {
  transition: boolean;
}

import clsx from "clsx";
const Loading: React.FC<LoadingProps> = ({ transition }) => {
  const containerClasses = clsx(
    "flex h-full w-full items-center justify-center",
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
        <div className=" flex h-[20vh] w-[60vh] items-center justify-center gap-2 rounded-full border border-b-[5px] border-black bg-slate-300 font-mono text-2xl font-bold">
          getting things ready... <span className="font-semibold">◔ ʖ̯ ◔</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
