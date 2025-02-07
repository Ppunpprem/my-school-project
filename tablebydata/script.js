// Sample data
const data = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 28, city: "Chicago" },
];

// console.log(data.find((value) => value.name === "Bob").age);
document.querySelector("h3").innerHTML = data.find(
  (value) => value.name === "Bob"
).age;
// Function to populate the table
function populateTable() {
  const tableBody = document.querySelector("#dataTable tbody");

  data.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.city}</td>
        `;

    tableBody.appendChild(row);
  });
}

// Call the function to populate the table
populateTable();
