import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const ResturantCard = (props) => {
  const { resData } = props;
  console.log(props);
  
  const {loggedInUser} = useContext(userContext)

  // Modern Swiggy API often uses .info, older used .data
  const info = resData?.info || resData?.data;

  if (!info) return null;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla, // newer API uses sla.deliveryTime
    deliveryTime, // older used deliveryTime directly
  } = info;

  return (
    <div data-testid = "resCard" className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rounded-lg"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString || deliveryTime + " mins"}</h4>
      <h4>user:{loggedInUser}</h4>
    </div>
  );
};

// higher order component
// use for enhancing the componenet

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div style={{ position: "relative" }}>
        <label style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "black",
          color: "white",
          padding: "2px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          zIndex: 1
        }}>Promoted</label>
        <ResturantCard {...props}/>
      </div>
    )
  };
};
export default ResturantCard;