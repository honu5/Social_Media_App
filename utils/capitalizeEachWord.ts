const capitalizeEachWord = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((i: string) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ");
    // This helper function is used to capitalize the first letter of each word in a string, it is used in the FollowSuggestions component to show the name of the users in a proper format, it takes a string as an argument and returns a string with the first letter of each word capitalized.

export default capitalizeEachWord;
