// objects creatoin


// const person: { name: string; age: number; color: string } = {
//     name: "Alen",
//     age: 30,
//     color: "blue"
// };

// console.log(person);
// console.log(person.age);



const emps = [{
    name: "John",
    age: 25,
    color: "green",
    project:{
        projectName: "Project A",
        projectDuration: "6 months",
        projectDetails: {
            projectManager: "Alice",
            projectBudget: 100000
        }

    } 
},
{
    name: "prasad",
    age: 29,
    color: "red",
    project:{
        projectName: "Project B",
        projectDuration: "12 months",
        projectDetails: {
            projectManager: "Been",
            projectBudget: 200000
        }

    } 
}]






console.log(emps[0].project.projectDetails.projectManager)
console.log(emps[1].project.projectDetails.projectManager)
console.log(emps.length)
emps[0].project.projectDetails.projectManager = "John";
console.log(emps[0].project.projectDetails.projectManager)


