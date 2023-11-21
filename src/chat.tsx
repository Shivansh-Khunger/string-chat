import { useLocation } from "react-router-dom";
import Peer from "peerjs";
import { useEffect, useMemo, useState } from "react";
import Info from "./components/chat/info";
import Loading from "./components/chat/loading";
import ConnectionToServerFailed from "./components/chat/connectionToServerFailed";
import ChatBox from "./components/chat/chatBox";
import { User } from "./interfaces/user";
import ConnectionToPeerFailed from "./components/chat/connectionToPeerFailed";

export function Chat() {
  let { state } = useLocation();
  const peer = useMemo(() => new Peer(), []);

  const [newUser, setNewUser] = useState<User>({
    username: state.username,
    module: peer,
  });

  const [transition, setTransition] = useState(false);
  const [loading, setLoading] = useState(true);
  const [connectionMade, setConnectionMade] = useState(false);
  const [connectedUsername, setConnectedUsername] = useState("");
  const [connectionToServerFailed, setConnectionToServerFailed] =
    useState(false);
  const [connectionIsMaintained, setConnectionIsMaintained] = useState(true);

  useEffect(() => {
    peer.on("open", (id) => {
      setNewUser((prevUser) => ({ ...prevUser, id }));
    });
  }, [peer]);

  useEffect(() => {
    peer.on("error", (err) => {
      if (err.type == "network" || "socket-error") {
        setConnectionToServerFailed(true);
      }
    });
  }, [peer]);

  useEffect(() => {
    if (peer.id && !connectionToServerFailed && connectionIsMaintained) {
      setTransition(true);
      setTimeout(() => {
        setLoading(false);
      }, 201);
    }
  }, [peer.id]);

  useEffect(() => {
    if (!connectionIsMaintained) {
      setTimeout(() => {
        setConnectionIsMaintained(true);
      }, 3000);
    }
  }, [connectionIsMaintained]);

  if (connectionToServerFailed) {
    return <ConnectionToServerFailed />;
  }
  if (!connectionIsMaintained) {
    return <ConnectionToPeerFailed transition={transition} />;
  } else if (loading) {
    return <Loading transition={transition} />;
  }

  return (
    <div className="h-screen w-screen">
      <Info
        newUser={newUser}
        connectionMade={connectionMade}
        setConnectionMade={setConnectionMade}
        connectedUsername={connectedUsername}
      />
      <ChatBox
        newUser={newUser}
        connectionMade={connectionMade}
        setConnectionMade={setConnectionMade}
        setConnectedUsername={setConnectedUsername}
        setConnectionToServerFailed={setConnectionToServerFailed}
        setConnectionIsMaintained={setConnectionIsMaintained}
      />
    </div>
  );
}
