import { User } from "@/interfaces/user";
import WaitingConnection from "./waitingConnection";
import { SetStateAction, useEffect, useState } from "react";

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
    }
  }, [idInputRecieved]);

  return (
    <div className="flex h-[90%] w-full items-center justify-center font-mono ">
      <div className="flex h-[89%] w-[90%] items-center justify-center rounded-[30px] border-2 border-b-8 border-black bg-slate-300">
        {connectionMade ? (
          <div>other side</div>
        ) : (
          <WaitingConnection
            setProvidedID={setProvidedID}
            providedID={providedID}
            setIDInputRecieved={setIDInputRecieved}
          />
        )}
      </div>
    </div>
  );
}
