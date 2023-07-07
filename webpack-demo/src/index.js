import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project.js';
import { initialdomManip } from './initial-dom-manip.js';

//Call blankProjectLoad on first land
blankProjectLoad();

//Call Dom Manipulation module to control UI
initialdomManip();

//TODO: click event module Here for todo and project creations

//Call create-to-do.ks module file and apply some objects/properties
const myToDo = createToDo("Grocery run", "Go get groceries", "07/07/2023", "Low", "Meat", "eggs");
const myToDo2 = createToDo("Gym", "Go to the gym", "07/07/2023", "High", "Meat");

console.log("show properties on myToDo from index.js...", myToDo);
console.log("show properties on myToDo2 from index.js...", myToDo2);