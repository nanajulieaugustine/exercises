const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", showBreadcrumbs);

function showBreadcrumbs() {
  bc.forEach((vare) => {
    console.log("vare", vare.name);
    console.log("vare", vare.link);
    if (bc[bc.length - 1].name === vare.name) {
      document.querySelector(
        "ul"
      ).innerHTML += `<li>&nbsp&nbsp/${vare.name}</li>`;
    } else {
      document.querySelector(
        "ul"
      ).innerHTML += `<li>&nbsp&nbsp/<a href="${vare.link}">${vare.name}</a></li>`;
    }
  });
}
