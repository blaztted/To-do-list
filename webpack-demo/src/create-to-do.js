import { compareAsc, format, parse, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './dom-manip.js'


//Creating an array for toDo, if needed down the road
let toDoArray = [];

//Factory function to create toDo list
export const createToDo = () => {
   
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    //Check if a empty fields exist
    if (Title == "" || Description == "" || DueDate == ""){
        alert("Title, Description, and Due Date are required fields, try again!")
        return;
    }

    //Check if a pre-date was entered
    if (parseISO(DueDate) < startOfToday()){
        alert("You have entered a date that has already gone! Please enter a valid date");
        console.log("due date", parseISO(DueDate));
        console.log("date now", startOfToday());
        return;
    }

    //Loop over the nodelist for Check list items from the DOM and format to string
    const nodeListCheckList = document.querySelectorAll("li");
    let CheckListArray = [];
    for (let i = 0; i  < nodeListCheckList.length; i++){

            //Strip off the "x" from end of each li then push to temp array
            let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
            CheckListArray.push(strippedCheckList);
    }

    //Strip off the checklist array and convert to string with commas
    let CheckList = CheckListArray.join(", ");

    console.log("Called createToDo module...creating todo now");
    console.log({Title, Description, DueDate, Priority, CheckList});
    console.log("Pushing this object to the toDoArray...");
    //TODO: remove below two lines of code if array is not needed
    toDoArray.push({Title, Description, DueDate, Priority, CheckList})
    console.log(toDoArray);


    //Reset the form after successful submission
    clearForm();

    return { Title, Description, DueDate, Priority, CheckList };

}