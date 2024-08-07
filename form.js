function showAlert() {
  alert("Hello, world!");
}
const alertButton = document.getElementsByClassName("alert-button")[0];
alertButton,addEventListener("click", showAlert);


// //another way to write the function button//
// document.getElementById("alert-button").addEventListener("click", function() {
//   alert("Hello, world!");
// }
function showConsole() {
    console.log("Console message");
  }
  
  const consoleButton = document.getElementsByClassName("alert-button")[1];
  consoleButton.addEventListener("click", showConsole);
  
  const showButton = document.getElementById("show-button");
  const hideButton = document.getElementById("hide-button");
  
  showButton.addEventListener("click", function() {
    document.getElementById("text").innerHTML = "JAVA SCRIPT";
  });
  
  hideButton.addEventListener("click", function() {
    document.getElementById("text").innerHTML = "";
  });
  
  const tasks = ["Buy groceries", "Do laundry", "Clean the house"];
  let task = "";
  const toDoInput = document.getElementById("to-do-input");
  toDoInput.addEventListener("input", function(event) {
      task = event.target.value;
      console.log(task);
  });
  
  for (let i = 0; i < tasks.length; i++) {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = tasks[i];
      document.getElementById("to-do-list").appendChild(taskItem);
  }
  
  const toDoButton = document.getElementById("to-do-button");
  toDoButton.addEventListener("click", function() {
      tasks.push(task);
      const taskItem = document.createElement("li");
      taskItem.innerHTML = task;
      document.getElementById("to-do-list").appendChild(taskItem);
      toDoInput.value = "";
  });
  