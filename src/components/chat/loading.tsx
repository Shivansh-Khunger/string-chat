interface LoadingProps {
  transition: boolean;
}

import classNames from "classnames";
export default function Loading(props: LoadingProps) {
  const containerClasses = classNames(
    "flex",
    "h-screen",
    "w-screen",
    "items-center",
    "justify-center",
    {
      "animate-delay-200": !props.transition,
      "animate-duration-[750ms]": !props.transition,
      "animate-once": !props.transition,
      "animate-fade-up": !props.transition,
    },
    {
      "animate-fade-down": props.transition,
      "animate-once": props.transition,
      "animate-reverse": props.transition,
      "animate-duration-[200ms]": props.transition,
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
}
