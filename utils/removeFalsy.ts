import { DynamicObject } from "interfaces/DynamicObject";

const removeFalsy = (obj: DynamicObject) => {
  let temp = { ...obj };
  for (let propName in temp) {
    if (
      temp[propName] === null ||
      temp[propName] === undefined ||
      temp[propName] === ""
    ) {
      delete temp[propName];
    }
  }
  return temp;
};
// This helper function is used to remove falsy values from an object, it takes an object as an argument and returns a new object with all the falsy values removed, it is used in the reducers to remove any falsy values from the data before updating the state, this is useful to avoid having null or undefined values in the state which can cause issues when rendering the components.
export default removeFalsy;
