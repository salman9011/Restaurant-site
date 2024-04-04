import {fireEvent, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../src/utils/appStore";
import "@testing-library/jest-dom"

test("should load the header component with login button", ()=>{
  render(<BrowserRouter>
   <Provider store={appStore}> 
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login") // not gud way
    //if there are multiple buttons
    const loginButton = screen.getByRole("button",{ name:"Login"})
    expect(loginButton).toBeInTheDocument();
});
//lets chck if cart is there r not
test("should load the header component with cart", ()=>{
  render(<BrowserRouter>
   <Provider store={appStore}> 
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    const cartItem = screen.getByText(/🛒/); // regix
    expect(cartItem).toBeInTheDocument();
});
test("should change logout button to login", ()=>{
  render(<BrowserRouter>
   <Provider store={appStore}> 
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    //firing an event
    const loginButton = screen.getByRole("button", {name :"Login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name :"Logout"});
    expect(logoutButton).toBeInTheDocument();
});