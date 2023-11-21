import { User } from "@/interfaces/user";
import WaitingConnection from "./waitingConnection";
import ChatBoxContent from "./chatBoxContent";
import { ReactNode, useEffect, useState } from "react";
import { DataConnection } from "peerjs";
import RecieveMessage from "./recieveMessage";
import SendMessage from "./sendMessage";

interface chatBoxProps {
  newUser: User;
  connectionMade: boolean;
  setConnectionMade: React.Dispatch<React.SetStateAction<boolean>>;
  setConnectedUsername: React.Dispatch<React.SetStateAction<string>>;
  setConnectionToServerFailed: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatBox: React.FC<chatBoxProps> = ({
  newUser,
  connectionMade,
  setConnectionMade,
  setConnectedUsername,
}) => {
  const [providedID, setProvidedID] = useState("");
  const [idInputRecieved, setIDInputRecieved] = useState(false);
  const [dataConnectionObject, setdataConnectionObject] =
    useState<DataConnection | null>(null);
  const [messageList, setMessageList] = useState<ReactNode[]>([]);
  const [sendMessage, setSendMessage] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    newUser.module.on("connection", (conn) => {
      setConnectionMade(true);
      setdataConnectionObject(conn);
      setConnectedUsername(conn.metadata);
      conn.on("open", () => {
        conn.send({
          type: 1,
          message: newUser.username,
        });
      });
    });
  }, []);

  useEffect(() => {
    if (!idInputRecieved) return;

    if (idInputRecieved) {
      setConnectionMade(true);
      var conn = newUser.module.connect(providedID, {
        metadata: newUser.username,
      });
      setdataConnectionObject(conn);
      // conn.on("open", function () {
      //   conn.on("data", (data: any) => {
      //     if (data.type == 1) {
      //       setConnectedUsername(data.message);
      //     }
      //     if (data.type == 2) {
      //       setMessageList((prevValue) => [
      //         ...prevValue,
      //         <RecieveMessage message={data.message} />,
      //       ]);
      //     }
      //   });
      // });
    }
  }, [idInputRecieved]);

  useEffect(() => {
    if (!sendMessage) return;
    console.log("I'm in Send Message Use Effect");
    if (sendMessage) {
      dataConnectionObject?.send({
        type: 2,
        message: typedMessage,
      });
      setMessageList((prevValue) => [
        ...prevValue,
        <SendMessage message={typedMessage} />,
      ]);
    }
    const timer = setTimeout(() => {
      setSendMessage(false);
      setTypedMessage("");
    }, 5);

    return () => clearTimeout(timer);
  }, [sendMessage]);

  useEffect(() => {
    const handleData = (data: any) => {
      if (data.type == 1) {
        setConnectedUsername(data.message);
      }
      if (data.type == 2) {
        console.log("Recieve event Listner");
        setMessageList((prevValue) => [
          ...prevValue,
          <RecieveMessage message={data.message} />,
        ]);
      }
    };

    dataConnectionObject?.on("data", handleData);

    // Clean up the event listener when the component unmounts
    return () => {
      dataConnectionObject?.off("data", handleData);
    };
  }, [dataConnectionObject]); // Re-run the effect when dataConnectionObject changes

  useEffect(() => {
    console.log(messageList);
  }, [messageList]);

  return (
    <div className="flex h-[90%] w-full items-center justify-center font-mono ">
      <div className="flex h-[97%] w-[80%] items-center justify-center rounded-[30px] border-2 border-b-8 border-black bg-slate-300">
        {connectionMade ? (
          <ChatBoxContent
            messageList={messageList}
            setTypedMessage={setTypedMessage}
            setSendMessage={setSendMessage}
            typedMessage={typedMessage}
          />
        ) : (
          <WaitingConnection
            setProvidedID={setProvidedID}
            providedID={providedID}
            setIDInputRecieved={setIDInputRecieved}
            user={newUser}
          />
        )}
      </div>
    </div>
  );
};

export default ChatBox;
