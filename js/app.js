/*
 * Principal javascript
 * to use.
 *
*/


const searchButton = document.getElementById('search-google-button');
searchButton.addEventListener('click', () => {
  const searchQuery = document.getElementById('search-query').value;

  const googleConcat = `https://www.google.com/search?q=${searchQuery}`;
  searchButton.setAttribute('href', googleConcat);

});
