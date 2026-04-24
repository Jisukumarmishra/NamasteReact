import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from"./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Eroor";
import ResturantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

//Chunking
//on demand loading
//Dynamic bundeling
//code spiliting
//lazy loading

const Grocery = lazy(() => import("./components/Grocery"))

// lazy loading for About uws page

const About = lazy(() => import("./components/About"))


// ap layout means this is the show the whole page of app
const AppLayout = () => {
  const [userName, setUserName ] = useState();

  // authentaciation
  useEffect(()=> {
    // make an api call and send userName and password
    const data = {
      name: "Jisu Mishra",
    };
    setUserName(data.name);
  },[]);


  return (
  <Provider store = {appStore} >
  <userContext.Provider value ={{loggedInUser:userName, setUserName}}>
  {/* Jisu Mishra */}
 <div className="app">
  <userContext.Provider value={{loggedInUser:"Harsh Mishra", setUserName}}>
    {/* Harsh Mishra */}
  <Header/>
  </userContext.Provider>
  <Outlet/>
 </div>
 </userContext.Provider>
 </Provider>
  );
};

// now create a new page 
const appRouter = createBrowserRouter([
  {

   path:"/",
   element:<AppLayout/>,
   errorElement:<Error/>,
   children: [
    {
    path:"/",
    element:<Body/>
    },

    {
    path: "/about", 
    element:<Suspense fallback={<h1>Loading !!!</h1>}><About/></Suspense>
    },

   {
    path:"/contact",
    element:<Contact/>
   },

   {
    path:"/grocery",
    element:<Suspense fallback={<h1>LOooding.....</h1>}><Grocery/></Suspense>
   },

   {
    path:"/restaurants/:resId",
    element:<ResturantMenu/>
   },
   {
   path:"/cart",
   element:<Cart/>
   }

   ],

  },

 
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)