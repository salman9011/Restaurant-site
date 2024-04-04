//react provides utility func , like gobal place where is kept and we can access it anywhere//
import { createContext } from "react";
const UserContext = createContext({
    loggedInUser : "Default User",
});
export default UserContext;