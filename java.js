
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  <script>
  const searchInput = document.getElementById("searchInput");
  const itemList = document.getElementById("itemList");
  const items = itemList.getElementsByTagName("li");

search query.
JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const itemList = document.getElementById('itemList');
  const items = itemList.getElementsByTagName('li');

  searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.toLowerCase();

  searchInput.addEventListener("keyup", function() {
    const filter = searchInput.value.toLowerCase();
    for (let i = 0; i < items.length; i++) {
      const itemText = items[i].textContent.toLowerCase();

      if (itemText.includes(searchTerm)) {
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
      }
      const text = items[i].textContent || items[i].innerText;
      items[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
    }
  });
});
</script>