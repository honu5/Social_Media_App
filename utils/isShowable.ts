const show = ["/newsfeed"];

const showable = () => {
  if (process.browser) {
    const pathname = location.pathname;
    return show.includes(pathname);
  }

  return false;
};
// This function is used to check if the current page is showable, it checks if the code is running in the browser and if the current pathname is included in the show array, it returns true if the pathname is included in the show array and false otherwise, this function is used in the Header component to conditionally render the header based on the current page.

export default showable;
