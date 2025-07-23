/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";


search query.
JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const itemList = document.getElementById('itemList');
  const items = itemList.getElementsByTagName('li'); // Get all list items

  searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.toLowerCase(); // Get input and convert to lowercase for case-insensitive search

    for (let i = 0; i < items.length; i++) {
      const itemText = items[i].textContent.toLowerCase();

      if (itemText.includes(searchTerm)) {
        items[i].style.display = ''; // Show the item
      } else {
        items[i].style.display = 'none'; // Hide the item
      }
    }
  });
});