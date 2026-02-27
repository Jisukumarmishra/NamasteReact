// create a arrow function that return some piece of jsx
import UserClass from "./UserClass";
import User from "./User";
const About = () => {
return (
  <div>
    <h1>About</h1>
    <h2>name of the application</h2>
    {/* <User/> */}

    <UserClass Name ={"Jisu_bhai"} />
  </div>
);
};
export default About;