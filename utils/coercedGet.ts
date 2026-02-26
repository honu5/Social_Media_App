import { DynamicObject } from "interfaces/DynamicObject";

const get = (obj: DynamicObject, path: string, defaultValue = undefined) => {
  const travel = (regexp: any) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res: any, key: any) =>
          res !== null && res !== undefined ? res[key] : res,
        obj
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};
// This helper function is used to get a nested value from an object using a string path, it takes an object, a string path and a default value as arguments, it returns the value at the specified path or the default value if the path does not exist in the object, it is used in the reducers to get the data from the response of the GraphCMS endpoint without having to check if the data exists at each level of the object.

export default get;
