export function LandingText() {
  return (
    <div className=" flex-col gap-3 p-12 ">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
        want your talks to be
        <br />
        <span className="font-outline-2 mx-2 tracking-wide text-slate-100 drop-shadow-[0_2.2px_0px_rgba(0,0,0,0.8)]">
          direct
        </span>
        <span className="font-outline-2 mx-2 font-bold">&</span>
        <span className=" font-outline-2 mx-2 tracking-wide text-slate-100 drop-shadow-[0_2.2px_0px_rgba(0,0,0,0.8)]">
          private
        </span>
      </h1>
      <h2 className="scroll-m-20 border-b border-black pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        string-chat is here for you
      </h2>
    </div>
  );
}
