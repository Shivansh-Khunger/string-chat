import { ReactNode, useRef, useEffect } from "react";
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
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageList]);

  return (
    <div className="h-full w-full">
      <div className="flex h-[89%] w-full animate-fade justify-evenly">
        <ul className="relative flex h-full flex-col justify-end overflow-hidden overflow-y-auto overscroll-y-contain text-xl">
          <div className="scrollbar scrollbar-thumb-black scrollbar-track-slate-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-[2px] overscroll-contain transition-all will-change-transform hover:overflow-y-scroll scroll-smooth">
            {messageList}
          </div>
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
