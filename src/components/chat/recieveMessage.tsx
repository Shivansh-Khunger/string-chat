import { messageProps } from "@/interfaces/messagesProps";

const RecieveMessage: React.FC<messageProps> = ({ message }) => {
  return (
    <>
      <li className="group my-4 mr-[46rem] flex items-start justify-start gap-2 will-change-transform hover:translate-x-[2px]">
        <span className="ml-4 mr-2 whitespace-nowrap">&nbsp;-&gt;</span>
        <p className="rounded-lg border border-black p-2 font-semibold shadow-[-3px_-3px_0px_0px_black] shadow-black transition-all group-hover:shadow-[0px_-3px_0px_0px_black]">
          {message}
        </p>
      </li>
    </>
  );
};

export default RecieveMessage;
