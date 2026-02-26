const getUniqueValues = (arr: Array<string | number>) => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};
// This helper function is used to get unique values from an array, it takes an array of strings or numbers as an argument and returns a new array with only the unique values, it is used in the reducers to update the state with the new list of friends without duplicates.

export default getUniqueValues;
