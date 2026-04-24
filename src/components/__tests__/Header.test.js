import { fireEvent, render , screen} from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import "@testing-library/jest-dom"

it("Should Load the header Component with a login button", ()=> {
  render(
  <BrowserRouter>
  <Provider store ={appStore}>
   <Header/>
  </Provider>
  </BrowserRouter>
)
const logInbutton = screen.getByRole("button", {name :"Login"});

// assertion
expect(logInbutton).toBeInTheDocument();
})

it("Should Load the header Component with a Cart items 1 in button", ()=> {
  render(
  <BrowserRouter>
  <Provider store ={appStore}>
   <Header/>
  </Provider>
  </BrowserRouter>
)
const cartItems = screen.getByText("Cart(2 items)");

// assertion
expect(cartItems).toBeInTheDocument();
})

it("Should Load the header Component with a Cart in button", ()=> {
  render(
  <BrowserRouter>
  <Provider store ={appStore}>
   <Header/>
  </Provider>
  </BrowserRouter>
)
// BrowswerRoute beacause of understand the link component of js-dom, provider is writ because to understandthe redux (useSelector) thrugh js-dom
const cartItems = screen.getByText(/Cart/); // here wwe pass a regex

// assertion
expect(cartItems).toBeInTheDocument();
})


it("Should change login button to logout button on click header Component with a login button", ()=> {
  render(
  <BrowserRouter>
  <Provider store ={appStore}>
   <Header/>
  </Provider>
  </BrowserRouter>
)

const logInbutton = screen.getByRole("button", {name :"Login"});
fireEvent.click(logInbutton);

const logOutButton = screen.getByRole("button", {name :"Logout"})

// assertion
expect(logOutButton).toBeInTheDocument();

})


