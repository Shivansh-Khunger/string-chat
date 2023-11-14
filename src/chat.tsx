import { useLocation } from "react-router-dom";
import Peer from "peerjs";
import { useEffect, useMemo, useState } from "react";
import Info from "./components/chat/info";
import Loading from "./components/chat/loading";

interface User {
  username: string;
  id: string;
}

export function Chat() {
  let { state } = useLocation();
  const peer = useMemo(() => new Peer(), []);

  const [newUser, setNewUser] = useState<User>({
    username: state.username,
    id: "",
  });
  const [transition, setTransition] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    peer.on("open", (id) => {
      setNewUser((prevUser) => ({ ...prevUser, id }));
    });
  }, [peer]);

  useEffect(() => {
    if (newUser.id) {
      setTransition(true);
      setTimeout(() => {
        setLoading(false);
      }, 201); // Adjust this value to match the duration of your transition
    }
  }, [newUser.id]);

  console.log("Username - ", newUser.username);
  console.log("Id - ", newUser.id);

  if (loading) {
    return <Loading transition={transition} />;
  }
  // setTransition(true);
  return (
    <>
      <Info idString={newUser.id} username={newUser.username} />
    </>
  );
}
