/*
 * Principal javascript
 * to use.
 *
 */

const searchButton = document.getElementById("search-google-button");
searchButton.addEventListener("click", () => {
  // query to search
  const searchInput = document.getElementById("search-query");
  const searchValue = searchInput.value;

  // validating the value of the query
  if (searchValue != "") {
    const googleConcat = `https://www.google.com/search?q=${searchValue}`;
    searchButton.setAttribute("href", googleConcat);
    searchInput.value = ''
  } else {
    alert('Search some to search')
  }
});
