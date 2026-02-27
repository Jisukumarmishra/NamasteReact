import { useState } from "react";

// create a functional component :- it is normal javascript function that return a some piece of jsx
const User = () => {
  const [count,count1,setCount ] = useState (1);
  return <div className="User-card">
    <h1>Count:{count}</h1>
    <h1>Count:{count}</h1>
    <h2>Name:Jisu</h2>
    <h3>Location:Greater_Noida</h3>
    <h4>Contact:@Jisu123</h4>

  </div>
};

export default User;