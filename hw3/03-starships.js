const url = "https://swapi.dev/api/starships/";
//make an array for starships to store data
let starships = [];

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const starships = data.results; //store the fetched data

    // get the buttons
    let displayAllButton = document.getElementById("all");
    let filterButton = document.getElementById("filter");
    let reduceButton = document.getElementById("reduce");

    // call the event buttons
    displayAllButton.addEventListener("click", () => {
      displayShipComponents(starships);
    });

    filterButton.addEventListener("click", () => {
      const filteredShips = filterStarships(starships);
      displayShipComponents(filteredShips);
    });

    reduceButton.addEventListener("click", () => {
      const totalCost = reduceStarships(starships);
      displayText(totalCost);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Call the fetchData function
fetchData(url);

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section1"); // do not modify this line
  container.classList.add("section-list");

  const row1 = document.createElement("div");
  row1.classList.add("row1");

  const row1Left = document.createElement("div");
  row1Left.classList.add("row1-left");
  row1Left.textContent = spaceship.name;

  const row1Right = document.createElement("div");
  row1Right.classList.add("row1-right");
  row1Right.textContent =
    Number(spaceship.cost_in_credits).toLocaleString() + " credits";

  row1.appendChild(row1Left);
  row1.appendChild(row1Right);

  container.appendChild(row1);
  // Create a line break element
  const lineBreak1 = document.createElement("br");

  // line break
  row1.appendChild(lineBreak1);

  container.appendChild(row1);

  // 2nd Row
  const row2 = document.createElement("div");
  row2.classList.add("row2");

  const manufacturedByDiv = document.createElement("div");
  manufacturedByDiv.textContent = "Manufactured by " + spaceship.manufacturer;
  row2.appendChild(manufacturedByDiv);

  container.appendChild(row2);
  container.appendChild(document.createElement("br"));

  // 3rd Row
  const row3 = document.createElement("div");
  row3.classList.add("row3");

  const columnContainer = document.createElement("div");
  columnContainer.classList.add("column-container");

  //column 1 data
  const column1 = document.createElement("div");
  column1.classList.add("column");

  //number of max atmostphere speed
  const column1Row1 = document.createElement("div");
  column1Row1.classList.add("col1row1");
  column1Row1.textContent = spaceship.max_atmosphering_speed;

  //text
  const column1Row2 = document.createElement("div");
  column1Row2.classList.add("col1row2");
  column1Row2.textContent = "Max Atmosphering Speed";

  column1.appendChild(column1Row1);
  column1.appendChild(column1Row2);

  columnContainer.appendChild(column1); // Add column1 to the container

  //column 2
  const column2 = document.createElement("div");
  column2.classList.add("column");
  column2.classList.add("vertical-line"); // Add the vertical-line between col1 and col2

  //colunm 3
  const column3 = document.createElement("div");
  column3.classList.add("column");

  //number of capacity
  const column3Row1 = document.createElement("div");
  column3Row1.classList.add("col3row1");
  column3Row1.textContent = Number(spaceship.cargo_capacity).toLocaleString();

  //text
  const column3Row2 = document.createElement("div");
  column3Row2.classList.add("col3row2");
  column3Row2.textContent = "Cargo Capacity";

  column3.appendChild(column3Row1);
  column3.appendChild(column3Row2);

  row3.appendChild(column1);
  row3.appendChild(column2);
  row3.appendChild(column3);

  container.appendChild(row3);

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  const Arr = input.filter((input) => {
    return Number(input.passengers) < 10 && Number(input.crew) > 1;
  });

  return Arr;
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  let intialValue = 0;
  const totalCost = input.reduce((preValue, currValue) => {
    currValue =
      currValue.cost_in_credits !== "unknown"
        ? Number(currValue.cost_in_credits)
        : 0;
    return preValue + currValue;
  }, intialValue);

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
