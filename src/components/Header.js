import {LOGO_URL} from "../utils/constants";
import { useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import {useSelector} from "react-redux";

const Header = () => {

  const[btnNameReact,setBtnNameReact] = useState("Login");
  // console.log("Header Rendered");
  
  const {loggedInUser} =useContext(userContext)
  // console.log(loggedInUser);

  const onlineStatus = useOnlineStatus();

  // subsribing to the store using selector
  // useSelector give  us access to the store ans we can select the part of the store that we want to use in our coomp0onent
  const cartItems = useSelector ((store) => store.cart.items)
  console.log(cartItems);


  useEffect(() => {
    console.log("useEffect Called");
  } );
  

  return (
    <div className="header"> 
    <div className ="logo-container">
      <img className="logo" src = {LOGO_URL}
      />
      </div>
      <div className = "nav-items">
        <ul>
          <li>Inenet_Connection{onlineStatus ?'💚' : '❤️'}</li>
          <li><Link to = "/Home">Home</Link></li>
          <li><a href = "/About">About</a></li> 
          <li><Link to ="/contact">Contact</Link></li>
          <li><Link to ="/Grocery">Grocery_Mode</Link></li>
          <li className="px-4 font-bold text-xl">Cart ( {cartItems.length} items)</li>
          <button
          className = "login"
          onClick={() => {
            btnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login")
          }
            
          }
          
          >Log in</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
    
  )
}
export default Header;

// () => {} this is callback hadler
// useSelector is hook for reading
// useDispatch is hook for dispatching actions