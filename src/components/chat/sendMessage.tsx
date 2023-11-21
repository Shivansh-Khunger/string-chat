import { messageProps } from "@/interfaces/messagesProps";

const SendMessage: React.FC<messageProps> = ({ message }) => {
  return (
    <>
      <li className="group my-4 ml-[46rem] mr-4 flex items-end justify-end gap-2 will-change-transform hover:-translate-x-[2px]">
        <p className="rounded-lg border border-black p-2 font-semibold shadow-[3px_3px_0px_0px_black] shadow-black transition-all group-hover:shadow-[0px_3px_0px_0px_black]">
          {message}
        </p>
        <span className="ml-2 mr-4 whitespace-nowrap">&lt;-&nbsp;you</span>
      </li>
    </>
  );
};

export default SendMessage;
