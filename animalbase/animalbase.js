"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  star: false,
  winner: false,
};

const settings = {
  filterBy: "all",
  sortBy: "name",
  sortDir: "asc",
};

let filterBy = "all";

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  registerButtons();
  loadJSON();
}

function registerButtons() {
  document
    .querySelectorAll("[data-action='filter']")
    .forEach((button) => button.addEventListener("click", selectedFilter));

  document
    .querySelectorAll("[data-action='sort']")
    .forEach((button) => button.addEventListener("click", selectSort));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  buildList();
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function selectedFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(`User selected ${filter}`);
  setFilter(filter);
}

function setFilter(filter) {
  settings.filterBy = filter;
  buildList();
}

function filterList(filteredList) {
  //   let filteredList = allAnimals;
  if (settings.filterBy === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (settings.filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  }

  return filteredList;
}

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    false;
  }
}

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    false;
  }
}

function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;

  const oldElement = document.querySelector(`[data-sort='${settings.sortBy}']`);
  oldElement.classList.remove("sortby");

  event.target.classList.add("sortby");

  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  console.log(`User selected ${sortBy} - ${sortDir}`);
  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}

function sortList(sortedList) {
  //   let sortedList = allAnimals;
  let direction = 1;
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    settings.direction = 1;
  }

  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(animalA, animalB) {
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  return sortedList;
}

function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);

  displayList(sortedList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  if (animal.star === true) {
    clone.querySelector("[data-field=star]").textContent =
      clone.querySelector.textContent = "★";
  } else {
    clone.querySelector("[data-field=star]").textContent =
      clone.querySelector.textContent = "☆";
  }

  clone.querySelector("[data-field=star]").addEventListener("click", clickStar);

  function clickStar() {
    if (animal.star === true) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    buildList();
  }
  clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;

  clone
    .querySelector("[data-field=winner]")
    .addEventListener("click", clickWinner);

  function clickWinner() {
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryToMakeAWinner(animal);
    }
    buildList();
  }
  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function tryToMakeAWinner(selectedAnimal) {
  const winners = allAnimals.filter((animal) => animal.winner);

  const numberOfWinners = winners.length;
  const other = winners
    .filter((animal) => animal.type === selectedAnimal.type)
    .shift();

  if (other !== undefined) {
    console.log("there can only be one winner of each type!");
    removeOther(other);
  } else if (numberOfWinners >= 2) {
    console.log("There can only be two winners!");
    removeAorB(winners[0], winners[1]);
  } else {
    makeWinner(selectedAnimal);
  }

  function removeOther(other) {
    document.querySelector("#remove_other").classList.remove("hide");
    document
      .querySelector("#remove_other .closebutton")
      .addEventListener("click", closeDialog);
    document
      .querySelector("#remove_other #removeother")
      .addEventListener("click", clickRemoveOther);
    function closeDialog() {
      document.querySelector("#remove_other").classList.add("hide");
      document
        .querySelector("#remove_other .closebutton")
        .removeEventListener("click", closeDialog);
      document
        .querySelector("#remove_other #removeother")
        .removeEventListener("click", clickRemoveOther);
    }

    document.querySelector(
      "#removeother [data-field=otherwinner]"
    ).textContent = other.name;

    function clickRemoveOther() {
      removeWinner(other);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeAorB(winnerA, winnerB) {
    document.querySelector("#remove_aorb").classList.remove("hide");
    document
      .querySelector("#remove_aorb .closebutton")
      .addEventListener("click", closeDialog);
    document
      .querySelector("#remove_aorb #removea")
      .addEventListener("click", clickRemoveA);
    document
      .querySelector("#remove_aorb #removeb")
      .addEventListener("click", clickRemoveB);

    document.querySelector("#remove_aorb [data-field=winnerA]").textContent =
      winnerA.name;

    document.querySelector("#remove_aorb [data-field=winnerB]").textContent =
      winnerB.name;

    function closeDialog() {
      document.querySelector("#remove_aorb").classList.add("hide");
      document
        .querySelector("#remove_aorb .closebutton")
        .removeEventListener("click", closeDialog);
      document
        .querySelector("#remove_aorb #removea")
        .removeEventListener("click", clickRemoveA);
      document
        .querySelector("#remove_aorb #removeb")
        .removeEventListener("click", clickRemoveB);
    }

    function clickRemoveA() {
      removeWinner(winnerA);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }

    function clickRemoveB() {
      removeWinner(winnerB);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }

  function makeWinner(animal) {
    animal.winner = true;
  }
}
