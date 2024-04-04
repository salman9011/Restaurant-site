import React, { Suspense, useEffect, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import UserContext from "./utils/userContext.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import Cart from "./components/Cart.jsx";

const Grocery = lazy(() => import("./components/Grocery.jsx"));
const AppContainer = () => {
  // lets write code for modifying context at root level...
  // for authentication//
  const [userName, setuserName] = useState("");
  useEffect(() => {
    let data = {
      name: "salman",
    };
    setuserName(data.name);
    // now how to pass this new name to my app and modify default one
  });
  
  return (
    // <UserContext.Provider value={{loggedInUser :userName}}>
    // <div className="app">
    // <UserContext.Provider value={{loggedInUser :"Irfan"}}>
    //   <Header />
    //   {/* we  can use nested context and change the value of header only */}
    //   </UserContext.Provider>
    //   <Outlet />
    // </div>
    // </UserContext.Provider>
    <Provider store ={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName}}>
      <div className="app">
        <Header />
        {/* we  can use nested context and change the value of header only */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
// const appRout =createBrowserRouter([
//   {
//     path:"/" ,
//   element:<AppContainer/>,
//   errorElement :<Error/>
//   },
//   {
//   path:"/about",
//   element:<About/>
//   },
//   {
//     path:"/contactus",
//     element:<ContactUs/>
//   }

// ])

/**
 * Lets create child Routing and make header section fixed
 *
 */
const appRout = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/", // if path is still root load body as well
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path :"/cart",
        element :<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRout} />);
