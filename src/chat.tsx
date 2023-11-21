import { useLocation } from "react-router-dom";
import Peer from "peerjs";
import { useEffect, useMemo, useState } from "react";
import Info from "./components/chat/info";
import Loading from "./components/chat/loading";
import DisconnectedFromPeer from "./components/chat/disconnectedFromPeer";
import ConnectionToServerFailed from "./components/chat/connectionToServerFailed";
import ChatBox from "./components/chat/chatBox";
import { User } from "./interfaces/user";

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
  const [peerConnectionLost, setPeerConnectionLost] = useState(false);
  const [show, setShow] = useState(false);

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
    if (peer.id && !connectionToServerFailed) {
      setTransition(true);
      setTimeout(() => {
        setLoading(false);
        setTransition(false);
        setShow(true);
      }, 201);
    }
  }, [peer.id]);

  useEffect(() => {
    if (!peerConnectionLost) return;
    if (peerConnectionLost && connectionMade) {
      const timeout = setTimeout(() => {
        setConnectionMade(false);
      }, 201);
      const timeout2 = setTimeout(() => {
        setPeerConnectionLost(false);
        setTransition(true);
      }, 3000);
      const timeout3 = setTimeout(() => {
        setShow(true);
        setTransition(false);
      }, 3201);
      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  }, [peerConnectionLost]);

  if (connectionToServerFailed) {
    return <ConnectionToServerFailed />;
  }
  if (peerConnectionLost) {
    return <DisconnectedFromPeer transition={transition} />;
  } else if (loading) {
    return <Loading transition={transition} />;
  } else if (show) {
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
          connectedUsername={connectedUsername}
          setConnectedUsername={setConnectedUsername}
          setConnectionToServerFailed={setConnectionToServerFailed}
          setPeerConnectionLost={setPeerConnectionLost}
        />
      </div>
    );
  }
}
