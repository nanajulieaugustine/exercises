const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

document.querySelector(".all_button").addEventListener("click", showTable);

function showTable() {
  const tbodyPointer = document.querySelector("tbody");
  showTheseVehicles(vehicles);

  function showTheseVehicles(arr) {
    tbodyPointer.innerHTML = "";
    arr.forEach((each) => {
      tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td>
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
    });
    document.querySelectorAll("td").forEach((cell) => {
      if (cell.textContent === "undefined") {
        cell.textContent = "";
      }
      if (cell.textContent === "true") {
        cell.textContent = "Yes";
      }
    });
  }
}

document.querySelector(".el_button").addEventListener("click", showTableEl);

function showTableEl() {
  const onlyElectric = vehicles.filter((veh) => veh.isElectric);

  function isElectric(vehicles) {
    if (vehicles.isElectric === "true") {
      return true;
    } else {
      return false;
    }
  }

  console.log("ONLYELECTRIC", onlyElectric);

  const tbodyPointer = document.querySelector("tbody");
  showTheseVehicles(onlyElectric);

  function showTheseVehicles(arr) {
    tbodyPointer.innerHTML = "";
    arr.forEach((each) => {
      tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td>
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
    });
    document.querySelectorAll("td").forEach((cell) => {
      if (cell.textContent === "undefined") {
        cell.textContent = "";
      }
      if (cell.textContent === "true") {
        cell.textContent = "Yes";
      }
    });
  }
}

document
  .querySelector(".seats_button")
  .addEventListener("click", showTableSeats);

function showTableSeats() {
  const onlyTwoPassengers = vehicles.filter((veh) => veh.passengers > 1);

  function passengers(vehicles) {
    if (vehicles.passengers === "true") {
      return true;
    } else {
      return false;
    }
  }

  console.log("Only2Passengers", onlyTwoPassengers);

  const tbodyPointer = document.querySelector("tbody");
  showTheseVehicles(onlyTwoPassengers);

  function showTheseVehicles(arr) {
    tbodyPointer.innerHTML = "";
    arr.forEach((each) => {
      tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td>
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
    });
    document.querySelectorAll("td").forEach((cell) => {
      if (cell.textContent === "undefined") {
        cell.textContent = "";
      }
      if (cell.textContent === "true") {
        cell.textContent = "Yes";
      }
    });
  }
}

document
  .querySelector(".jonas_button")
  .addEventListener("click", showTableJonas);

function showTableJonas() {
  const JonasElectricVehicles = vehicles.filter(
    (veh) => veh.isElectric && veh.ownedBy === "Jonas"
  );

  function ownedBy(vehicles) {
    if (vehicles.ownedBy === "true") {
      return true;
    } else {
      return false;
    }
  }

  console.log("Electric By Jonas", JonasElectricVehicles);

  const tbodyPointer = document.querySelector("tbody");
  showTheseVehicles(JonasElectricVehicles);

  function showTheseVehicles(arr) {
    tbodyPointer.innerHTML = "";
    arr.forEach((each) => {
      tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td>
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
    });
    document.querySelectorAll("td").forEach((cell) => {
      if (cell.textContent === "undefined") {
        cell.textContent = "";
      }
      if (cell.textContent === "true") {
        cell.textContent = "Yes";
      }
    });
  }
}

document
  .querySelector(".ryebread_button")
  .addEventListener("click", showTableRyebread);

function showTableRyebread() {
  const RugbraedMoreThanOnePassenger = vehicles.filter(
    (veh) => veh.passengers > 0 && veh.fuel === "Rugbrød"
  );

  function ownedBy(vehicles) {
    if (vehicles.ownedBy === "true") {
      return true;
    } else {
      return false;
    }
  }

  console.log("Rugbrød mere end 1", RugbraedMoreThanOnePassenger);

  const tbodyPointer = document.querySelector("tbody");
  showTheseVehicles(RugbraedMoreThanOnePassenger);

  function showTheseVehicles(arr) {
    tbodyPointer.innerHTML = "";
    arr.forEach((each) => {
      tbodyPointer.innerHTML += `<tr>
    <td>${each.type}</td>
    <td>${each.fuel}</td>
    <td>${each.passengers}</td>
    <td>${each.stops}</td>
    <td>${each.ownedBy}</td>
    <td>${each.isElectric}</td>
    <td>${each.isTandem}</td>
  </tr>`;
    });
    document.querySelectorAll("td").forEach((cell) => {
      if (cell.textContent === "undefined") {
        cell.textContent = "";
      }
      if (cell.textContent === "true") {
        cell.textContent = "Yes";
      }
    });
  }
}
