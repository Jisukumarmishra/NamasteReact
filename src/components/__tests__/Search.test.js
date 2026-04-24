// integration testing := testing of conjuction of multiple component ivolvement in one features
import { render, act, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mocksResLisData.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it ("Should search restList for burger test Input ", async ()=> {
  await act ( async () => 
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    );

    const cardBeforeSearch = await screen.findAllByTestId("resCard");

    expect(cardBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button",{name:"Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value: "Mocha"}}); 

    fireEvent.click(searchBtn);

    const cardsAfterSearch = await screen.findAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);

    // expect(searchBtn).toBeInTheDocument();
});

it("Should filter top rated restautn", async () => {
  await act(async () => 
    render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = await screen.findAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Resturant"});
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = await screen.findAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(19);
});