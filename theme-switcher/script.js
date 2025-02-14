const theStoredTheme = localStorage.getItem("storedTheme");
console.log("storedTheme", theStoredTheme);
if (theStoredTheme !== null) {
  document.querySelector("body").dataset.theme = theStoredTheme;
  document.querySelector("#select").value = theStoredTheme;
}
document.querySelector("#select").addEventListener("change", changeTheme);

function changeTheme(evt) {
  const chosenTheme = evt.target.value;

  document.querySelector("body").dataset.theme = chosenTheme;
  localStorage.setItem("storedTheme", chosenTheme);
}
