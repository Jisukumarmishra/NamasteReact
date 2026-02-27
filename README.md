to start this project at server command is :-
npx parcel index.html

-Default Export/Import

export default Components;
import Components from "path"

-Named Export/Import

export const Component;
import {Component} from "path";



*Rule:

./ → current folder

./components/ → inside the components folder

Think of folders like rooms in a house:

./ → same room

../ → go to parent room

../../ → go to grandparent room


./      → same folder
../     → one folder back
../../  → two folders back



# React Hooks :- 
Normal js utility function
-useState() -
-useEffect()

#2 types of rounting in web app
Client side rounting :- Modern way of rounting, allowing navigation within a full page reload 
Server side rounting :- old vesion of rounting , Each page request goes to the serverwhich response the full html page

# Redux ToolKit
- install @reduxjs
- Build Our Store
- Connect our Store to Our App
- Slice (CartSlicce)
- dispatch(action)
- Selector