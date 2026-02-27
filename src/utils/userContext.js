// creating a context in react

const { createContext } = require("react");

const userContext = createContext({
    loggedInUser: "Default usser",
});

export default userContext;