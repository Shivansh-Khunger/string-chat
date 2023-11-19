import { ReactNode } from "react";
import MessageInput from "./messageInput";

interface chatBoxContentProps {
  messageList: ReactNode[];
  setTypedMessage: React.Dispatch<React.SetStateAction<string>>;
  setSendMessage: React.Dispatch<React.SetStateAction<boolean>>;
  typedMessage: string;
}

const ChatBoxContent: React.FC<chatBoxContentProps> = ({
  messageList,
  setTypedMessage,
  setSendMessage,
  typedMessage,
}) => {
  return (
    <div className="h-full w-full">
      <div className="flex h-[89%] w-full animate-fade justify-evenly">
        <ul className=" flex h-full flex-col justify-end overflow-y-hidden text-xl">
          {messageList}
        </ul>
      </div>
      <MessageInput
        setTypedMessage={setTypedMessage}
        setSendMessage={setSendMessage}
        typedMessage={typedMessage}
      />
    </div>
  );
};

export default ChatBoxContent;
