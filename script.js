/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

*/

/* What do I need?
My button on click, add information to the table

How do I get information? - form the <input> fields and their .value()
Need: firstName, lastName, favoriteColor - store that in a variable
find a way to get the # value
Way to get values from the form when we submit then append() the info to the table

We need to get values with getElementById()
That means we need ID's on our values

*/
// This variable calls my submit button from my html doc.
const formButton = document.getElementById("formSubmit");
// This variable just creates the starting index.
let number = 0;
// This element allows the button to work and also the preventDefault() method keeps it from refreshing.
formButton.addEventListener("click", (event) => {
  event.preventDefault();
  //variables to hold the values of the form
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let favoriteColor = document.getElementById("favoriteColor").value;

  //to create a node a tr node to append to my form

  let newTableRow = document.createElement("tr");

  let numberNode = document.createElement("td");
  numberNode.innerHTML = number;
  newTableRow.append(numberNode);

  let firstNameNode = document.createElement("td");
  firstNameNode.innerHTML = firstName;
  newTableRow.append(firstNameNode);

  let lastNameNode = document.createElement("td");
  lastNameNode.innerHTML = lastName;
  newTableRow.append(lastNameNode);

  let favoriteColorNode = document.createElement("td");
  favoriteColorNode.innerHTML = favoriteColor;
  newTableRow.append(favoriteColorNode);

  document.getElementById("tBody").appendChild(newTableRow);
// this clears the form after every submit.
  document.getElementById('firstName').value = ''
  document.getElementById('lastName').value = ''
  document.getElementById('favoriteColor').value = ''
// increments the number by one for each new line
  number++;
});
