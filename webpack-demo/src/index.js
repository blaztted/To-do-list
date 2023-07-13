import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project.js';
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm } from './dom-manip.js';


//Call blankProjectLoad on first land
blankProjectLoad();

//TODO: COme back to this call in case I build this in the future
//Call DOM Manipulation module to load default project
//displayDefaultProject();

//Click events module
let clickEventsModule = (function(){

    //click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    //click event for adding an item to the checklist
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    //Click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    //Click event to submit a new todo form to project
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
})();




/* 
//Call create-to-do.ks module file and apply some objects/properties
const myToDo = createToDo("Grocery run", "Go get groceries", "07/07/2023", "Low", "Meat", "eggs");
const myToDo2 = createToDo("Gym", "Go to the gym", "07/07/2023", "High", "Meat");

console.log("show properties on myToDo from index.js...", myToDo);
console.log("show properties on myToDo2 from index.js...", myToDo2); */