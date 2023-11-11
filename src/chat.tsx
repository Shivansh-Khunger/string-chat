import { useLocation } from "react-router-dom";

export function Chat() {
  let { state } = useLocation();
  console.log(state.username);
  return <div>{state.username}</div>;
}
