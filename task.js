// TASK MANAGER

// Template Literal allows us to create separate lines
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
  `Charge MacBook`, 
  `Master JavaScript`
];

// For displaying tasks for the user
let showTasks = "";

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends the program (AKA Until the user enters "CLOSE")
while (userInput !== "CLOSE"){
  // Checks if user entered "TASKS"
  if (userInput === "TASKS"){
    // Concatenates each task (AKA item) in the tasks array to the showTasks string variable
    for (task of tasks){
      // Using \n to create a new line (AKA Line Break) after each task
      showTasks += `${task}\n`;
    }
    // Displays the current tasks to the user
    alert(showTasks);
    // Sets the value of the showTasks string variable back to an empty string
    // showTasks = "";
  }

  // Displays the menu again
  userInput = prompt(menu);
}
// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager!`);

