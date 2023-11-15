import WaitingConnection from "./waitingConnection";
export default function ChatBox() {
  return (
    <div className="flex h-[90%] w-full items-center justify-center font-mono ">
      <div className="flex h-[89%] w-[90%] items-center justify-center rounded-[30px] border-2 border-b-8 border-black bg-slate-300">
        <WaitingConnection />
        <div></div>
      </div>
    </div>
  );
}
