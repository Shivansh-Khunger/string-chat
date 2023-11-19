import { messageProps } from "@/interfaces/messagesProps";

const RecieveMessage: React.FC<messageProps> = ({ message, username }) => {
  return (
    <>
      {/* <li className="my-4 mr-[46rem] flex items-start justify-center gap-2 ">
        <span className="ml-4 mr-2 inline-flex w-auto whitespace-nowrap ">
          {username}&nbsp;-&gt;
        </span>
        <p className="rounded-lg border border-black p-2 font-semibold shadow-[-3px_-3px_0px_0px_black] shadow-black">
          Dearest love of mine, there is not a star in the expanse of the
          universe that could shine as bright as you do. I hope that you have
          the best possible day and the sweetest dreams tonight.
        </p>
      </li> */}
      <li
        className=" my-4 mr-[46rem] flex items-start justify-start gap-2"
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        <div className="">
          <span className="ml-4 mr-2 whitespace-nowrap">
            <span className=" opacity-0 transition group-hover:opacity-100">
              {username}
            </span>
            <span className="group-hover:translate-x-[3px]">&nbsp;-&gt;</span>
          </span>
        </div>
        <p className="rounded-lg border border-black p-2 font-semibold shadow-[-3px_-3px_0px_0px_black] shadow-black">
          {message}
        </p>
      </li>
    </>
  );
};

export default RecieveMessage;
