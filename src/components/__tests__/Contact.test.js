import { getAllByRole, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Contact from "../Contact"

describe ("Contact us page Test Cases ", () => {

  // beforeAll(() => {
  //   console.log("before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // })

  // afterAll(() => {
  //   console.log("After All")
  // })

  // afterEach(() => {
  //   console.log("After Each")
  // })

// in the place of test we can also write a it
test("Should Load Contact us component", () => {
  render(<Contact/>);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
  

});

test ("Should Botton inside Contact us component", () => {
  render(<Contact/>);

  const button = screen.getByText("Submit");

  //Assertion
  expect(button).toBeInTheDocument();
});

test ("Should Load input value inside Contact component", () => {
  render(<Contact/>);

  const inputName = screen.getByPlaceholderText("name");

  // Assertion
  expect(inputName).toBeInTheDocument();
});

test ("Should Load 2 input boxes on the contact component ", () => {
  render(<Contact/>);
  
  //Quering
  const inputBoxes = screen.getAllByRole("textbox");
  // Assertion
  expect(inputBoxes.length).not.toBe(3);
});

});

