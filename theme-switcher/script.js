const select = document.querySelector("#select");
const body = document.body;

select.addEventListener("change", changeTheme);

function changeTheme() {
  const selectedTheme = select.value;
  body.setAttribute("data-theme", selectedTheme);
  console.log("Theme changed to:", selectedTheme);
}
