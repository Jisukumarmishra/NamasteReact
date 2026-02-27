import { useRouteError } from "react-router-dom"; // bro take care of the poit of useRoute not router ok
const Error = () => { //  thius is the arrow function this return some jsx code
  const err = useRouteError();
  console.log(err);
  return (
  <div>
  <h1>Oops!!!</h1>
  <h2>Something Went wrong</h2>
  </div>
  )
}

export default Error;