import { useContext } from "react";
import RouterContext from "./RouterContext";

export default function (props) {
  let context = useContext(RouterContext);
  let { to = '/', from } = props;
  let { history, location: { pathname } }= context;
  console.log('pathname',pathname, 'from', from, 'to: ', to);
  // 判断
  if (!from || from === pathname) {
    history.push(to);
  }
  return null;
}