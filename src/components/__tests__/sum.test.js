import { sum } from "../sum";
test ("Sun Function Should Calculate the Sum Of Two Number", () => {
const result = sum (3, 4);

// Assertion
expect(result).toBe(7);
});