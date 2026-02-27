import ResturantCard, {withPromotedLabel} from "./ResturantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
 
const Body = () => {
  const [listOfResturant, setListOfRestraunt]=  useState([]);
  const [searchText,setSearchText] = useState ("");
  const [filterRestaurant,setFilterResturant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(ResturantCard);// withpromoted lebel is higher order componenet within that we pass a Restaurantcard

  // useState is never used outside the compoenents, ite give you the error 
  // useState is neve use inside the if-else condation, function, for lopp and other condation its might be not give the error but its lead to the inconsistency in your code
  // it is use to create a localstateVarriable inside your functional compoenent

  // whenever state varriables update , react triggers a reconliation cycle(re-render the component)
  console.log("Body Rendered");

  useEffect( () => {
  fetchData();
  } , []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining to safely access the restaurant data
    const restaurants = json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestraunt(restaurants );
    setFilterResturant(restaurants );
  };

const onlineStaus = useOnlineStatus();


const {loggedInUser, setUserName } = useContext(userContext);

if (onlineStaus === false) return (
 <h1>
  L00KS LIKE YOU ARE OFLLINE !!!! PLEASE CHECK YOUR INTERNET
  </h1>
)



  return listOfResturant.length === 0 ? <Shimmer/> :  (
    <div className ="body" >
     <div className="filter">
      <div className="search">
        <input type="text" className="border border-solid border-black p-2 w-64 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}/>
        <button className ="px-4 py-2 bg-green-500 text-white rounded-md ml-2 hover:bg-green-600"
        onClick={() => {
          // filter the resturant card and update the ui
          const filteredResturant = listOfResturant.filter((res) =>
            (res?.info?.name || res?.data?.name)
              .toLowerCase()
              .includes(searchText.toLowerCase())
          );
          setFilterResturant(filteredResturant);
        }}> Search</button>
      </div><button
      className=" text-black rounded-md ml-2 cursor-pointer"
      onClick={ ()=> {
      const filterList = listOfResturant.filter(
        (res) => (res?.info?.avgRating || res?.data?.avgRating) > 4
      );

      setFilterResturant(filterList);
    
      }}>Top Rated Resturant</button>
     </div>
     <div className=" search m-4 p4 flex items-centre">
      <label>UserName:</label>
      <input className="border border-black" 
      value={loggedInUser}
      onChange={(e)=> setUserName(e.target.value)}></input>
     </div>

     <div className = "res-Container">
        {
          filterRestaurant.map((restaurant)=>(
          <Link key ={restaurant?.info?.id } // || restaurant?.data?.id
          to ={"/restaurants/" + restaurant?.info?.id }
          >
            {/** if the restaurant has avgRating > 4.2 then add a promoted label to it */
            restaurant.info.avgRating > 4.2 ? <RestaurantCardPromoted resData={restaurant}/>: <ResturantCard resData={restaurant}/>
            }
          
          </Link>// this is renderig 

          ))}
      </div>
    </div>
  );
};

export default Body;