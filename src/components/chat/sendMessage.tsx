import { messageProps } from "@/interfaces/messagesProps";

const SendMessage: React.FC<messageProps> = ({ message, username }) => {
  return (
    <>
      <li className="my-4 ml-[46rem] flex items-end justify-center gap-2">
        <p className="rounded-lg border border-black p-2 font-semibold shadow-[3px_3px_0px_0px_black] shadow-black ">
          {message}
        </p>
        <span className="ml-2 mr-4 whitespace-nowrap">&lt;-&nbsp;you</span>
      </li>
      {/* <li className="my-4 ml-[46rem] flex items-end justify-center gap-2">
        <p className="rounded-lg border border-black p-2 font-semibold shadow-[3px_3px_0px_0px_black] shadow-black ">
          {message}
        </p>
        <span className="ml-2 mr-4 whitespace-nowrap">&lt;-</span>
      </li> */}
    </>
  );
};

export default SendMessage;
