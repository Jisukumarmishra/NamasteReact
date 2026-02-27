import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const ResturantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []); // empty dependency array = runs only once on mount

  // const fetchMenu = async () => {
  //   const data = await fetch(
      
  //     // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45726442936017&lng=77.49772086718019&restaurantId=426714&catalog_qa=undefined&submitAction=ENTER"
      
  //      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };


 if (resInfo === null) return <Shimmer />;


 // this is for restauran list  dynamically //

 const { name, cuisines, costForTwo } = resInfo.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info;
 const { restaurants } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  console.log(restaurants);

  return (
    <div className="Restaurant_Lists">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{costForTwo}</h3>
      <ul>
        {restaurants.map(rest => (
          <li key = {rest.info.id}> {rest.info.name}- {}
          {rest.info.locality}</li>
        ))}
        {/* <li>{restaurants[1].info.name}</li>
         <li>{restaurants[2].info.name}</li>
          <li>{restaurants[3].info.name}</li> */}
        {/* <li>Burger</li> */}
        {/* <li>Diet coke</li> */}
      </ul>
    </div>
  );

//  return (
//  <div className="menu">
//   <h1>Name of the restaurant</h1>
//   <h2>Menu</h2>
//   <ul>
//     <li>Biryani</li>
//     <li>Byrgers</li>
//   </ul>
//  </div>
//  );
};

export default ResturantMenu;
