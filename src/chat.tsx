import { useLocation } from "react-router-dom";
import Peer from "peerjs";
import { useEffect, useMemo, useState } from "react";
import Info from "./components/chat/info";
import Loading from "./components/chat/loading";
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

  useEffect(() => {
    peer.on("open", (id) => {
      setNewUser((prevUser) => ({ ...prevUser, id }));
    });
  }, [peer]);

  useEffect(() => {
    if (peer.id) {
      setTransition(true);
      setTimeout(() => {
        setLoading(false);
      }, 201);
    }
  }, [peer.id]);

  console.log("Username - ", newUser.username);
  console.log("Id - ", newUser.module.id);

  if (loading) {
    return <Loading transition={transition} />;
  }
  // setTransition(true);
  return (
    <div className="h-screen w-screen">
      <Info idString={newUser.module.id} username={newUser.username} />
      <ChatBox {...newUser} />
    </div>
  );
}
