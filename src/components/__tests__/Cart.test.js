//  resList testing
import { render, screen } from "@testing-library/react";
import { act } from "react";
import ResturantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json"

global.fetch = jest.fn(()=>
Promise.resolve({
  json: () => Promise.resolve(MOCK_DATA),
})
)

// it ("should load restaurantMenu component", async () => {
// await act(async () => render(<RestaurantMenu.js/>))
// })