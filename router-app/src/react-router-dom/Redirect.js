import { useContext } from "react";
import RouterContext from "./RouterContext";

export default function (props) {
  let context = useContext(RouterContext);
  let { to = '/' } = props;
  let { history }= context;
  // 判断
  history.push(to);
  return null;
}