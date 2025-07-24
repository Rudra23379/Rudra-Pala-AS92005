/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  <script>
  const searchInput = document.getElementById("searchInput");
  const itemList = document.getElementById("itemList");
  const items = itemList.getElementsByTagName("li");

  searchInput.addEventListener("keyup", function() {
    const filter = searchInput.value.toLowerCase();
    for (let i = 0; i < items.length; i++) {
      const text = items[i].textContent || items[i].innerText;
      items[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
    }
  });
</script>