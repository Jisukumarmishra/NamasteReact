// creating this componet using class based component
// like functional componet := it is normally js function
// similarly class based componnet :=it is normal js class which have render method which return some piece of jsx

import React, { useState } from "react";
class UserClass extends React.Component {
  constructor (props) {
      super(props)
      console.log(props);
      this.state = {
        // create a local state v arraible
        userInfo: {
          name:"Dummy",
          location:"Default"
        }
      };

      // creating a state varraible in the class bases component
      // this.state = {
      //   count1:1,
      //   count2:2
      // };
    }
    async componentDidMount() {
      // api call
      const data = await fetch("https://api.github.com/users/jisukumarmishra")
      const json = await data.json();
      //updated the state varraible with data 
      this.setState({
         userInfo:json
      });
      console.log(json);
    }

  render () {
    const {count1} = this.state;  // destructuring it

   const {name,location} = this.state.userInfo
    return <div className="User-card">
    {/* now destructured it */}
    {/* <h1>Count:{count1}</h1> */}
    {/* <button onClick={()=> {
      this.setState({
      count1:this.state.count1+1
      })
    }}>Count Increase</button> */}
    {/* <h1>Count1:{this.state.count1}</h1> */}
    <h2>Name:{name}</h2>
    <h3>Location:{location}</h3>
    <h4>Contact:@Jisu123</h4>

  </div>

  }
}

export default UserClass;