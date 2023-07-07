//Factory function to create blank project array list
export const blankProjectLoad = () => {

    console.log("Creating blank project array now");
    let projectsArray = [];
    console.log("Pushiing the title name of project to projectArray...");
    let projectTitle = "Default Project";
    projectsArray.push({ projectTitle });
    console.log(projectsArray);
    return { projectsArray, projectTitle };
} 