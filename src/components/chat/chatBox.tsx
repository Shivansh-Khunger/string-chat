import { User } from "@/interfaces/user";
import WaitingConnection from "./waitingConnection";
import ChatBoxContent from "./chatBoxContent";
import { useEffect, useState } from "react";

export default function ChatBox(newUser: User) {
  const [providedID, setProvidedID] = useState("");
  const [idInputRecieved, setIDInputRecieved] = useState(false);
  const [connectionMade, setConnectionMade] = useState(false);

  useEffect(() => {
    // Making this peer available for connections
    newUser.module.on("connection", (conn) => {
      setConnectionMade(true);
      console.log(conn.metadata);
    });
  });

  useEffect(() => {
    if (idInputRecieved) {
      setConnectionMade(true);
      var conn = newUser.module.connect(providedID, {
        metadata: newUser.username,
      });
      conn; // just for tsx
    }
  }, [idInputRecieved]);

  return (
    <div className="flex h-[90%] w-full items-center justify-center font-mono ">
      <div className="flex h-[97%] w-[80%] items-center justify-center rounded-[30px] border-2 border-b-8 border-black bg-slate-300">
        {connectionMade ? (
          <ChatBoxContent />
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
}
