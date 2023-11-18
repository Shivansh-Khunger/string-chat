interface LoadingProps {
  transition: boolean;
}

import classNames from "classnames";
const Loading: React.FC<LoadingProps> = ({ transition }) => {
  const containerClasses = classNames(
    "flex",
    "h-screen",
    "w-screen",
    "items-center",
    "justify-center",
    {
      "animate-delay-200": !transition,
      "animate-duration-[750ms]": !transition,
      "animate-once": !transition,
      "animate-fade-up": !transition,
    },
    {
      "animate-fade-down": transition,
      "animate-once": transition,
      "animate-reverse": transition,
      "animate-duration-[200ms]": transition,
    },
  );
  return (
    <div className={containerClasses}>
      <div className="flex justify-center p-[5px]">
        <div className=" flex h-[20vh] w-[60vh] items-center justify-center gap-2 rounded-full border border-b-4 border-black bg-slate-300 font-mono text-2xl font-bold">
          Loading... <span className="font-semibold">◔ ʖ̯ ◔</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
