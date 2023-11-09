import { useLocation } from "react-router-dom";

export function Main() {
  let { state } = useLocation();
  console.log(state.username);
  return <div>{state.username}</div>;
}
