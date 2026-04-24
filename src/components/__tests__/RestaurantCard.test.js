import ResturantCard, { withPromotedLabel } from "../ResturantCard"
import MOCK_DATA from "../mocks/resCardsMocks.json"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it ("Should return RestaurantCard component With Props Data",() => {
  render(<ResturantCard resData={MOCK_DATA.resData} />);
  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

it ("should render RestaurantCard Component WithPromotedLabel ", () => {
  const PromotedRestaurantCard = withPromotedLabel(ResturantCard); // because withPromotedLabel is hof
  render(<PromotedRestaurantCard resData={MOCK_DATA.resData} />);
  const label = screen.getByText("Promoted");
  expect(label).toBeInTheDocument();
});