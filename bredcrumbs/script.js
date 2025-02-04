const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", showBreadcrumbs);

function showBreadcrumbs() {
  bc.forEach((vare) => {
    if (bc[bc.length - 1].name === vare.name) {
      document.querySelector("ul").innerHTML += `<li>${vare.name}</li>`;
    } else {
      document.querySelector(
        "ul"
      ).innerHTML += `<li><a href="${vare.link}">${vare.name}</a>&nbsp/&nbsp</li>`;
    }
  });
}
