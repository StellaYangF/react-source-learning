import React from 'react';
import { RouteComponentProps } from 'react-router';
interface IParams {}
type RouteProps = RouteComponentProps<IParams>;
type Props = RouteProps & {
  children? : any
}
export default function Home(props: Props) {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => props.history.go(-1) }>back</button>
    </div>
  )
}