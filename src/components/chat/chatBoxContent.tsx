import { Send } from "lucide-react";
import MessageInput from "./messageInput";
import RecieveMessage from "./recieveMessage";
import SendMessage from "./sendMessage";
const username_1 = "computer-1";
const username_2 = "computer-2";
const ChatBoxContent = () => {
  return (
    <div className="h-full w-full">
      <div className="flex h-[90%] w-full justify-evenly">
        <ul className=" flex h-full flex-col justify-end overflow-y-hidden text-xl">
          <RecieveMessage
            message="Hey Man What Are you doing"
            username={username_1}
          />
          <SendMessage
            message="Good Man What are you upto"
            username={username_2}
          />
          <SendMessage
            message="Good Man What are you uo"
            username={username_2}
          />
          <SendMessage message="Hello" username={username_1} />
        </ul>
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatBoxContent;
