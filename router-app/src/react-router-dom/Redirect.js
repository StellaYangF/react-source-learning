import { useContext } from "react";
import RouterContext from "./RouterContext";

export default function (props) {
  let context = useContext(RouterContext);
  // 判断
  if (!props.from || props.from === context.location.pathname) context.history.push(props.to);
  return null;
}