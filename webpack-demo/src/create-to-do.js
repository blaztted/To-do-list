//Creating an array for toDo, if needed down the road
let toDoArray = [];

//Factory function to create toDo list
export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {

    console.log("Called createToDo module...creating ToDo now");
    console.log({ Title, Description, DueDate, Priority, CheckList });
    console.log("Pushing this object to the toDoArray...");

    //TODO: remove below two lines of code if array ain't needed
    toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
    console.log(toDoArray);
    return { Title, Description, DueDate, Priority, CheckList};


}