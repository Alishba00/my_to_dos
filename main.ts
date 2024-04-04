import inquirer from "inquirer";
import chalk from "chalk";

let toDos:string[] = [];
let condition :boolean= true;

let exit

   console.log(chalk.red("\n\t!! WELCOME TO ALISHBA'S TODOS APPLICATION !! \n"));
while (condition){
    let toDosList = await inquirer.prompt({
    name:"tasks",
    message:("Choice one operator?"),
    type:"list",
    choices:["ADD" ,"VIEW","REMOVE","UPDATE","EXIT"],
});
 if (toDosList.tasks == "EXIT"){
    console.log(chalk.bold.underline.magentaBright("\n\tEXCITING APPLICATION.. GOODBYE!!\n"))

    exit = "EXIT"
    break;
 }
//1.add work.
 else if (toDosList.tasks == "ADD"){
    let addList = await inquirer.prompt({
        name:'addtask',
        type:"input",
        message:chalk.bold.yellow("WHAT TASK YOU WANT TO ADD IN YOUR TODOS?"),
    });
      if (addList.addtask.length <= 0 ){
        console.log(chalk.bold.underline.redBright("\n\tENTER A VALID TASK..\n"))
         } else {
        toDos.forEach((toDos) => console.log(chalk.bold.green(toDos)));

        console.log(chalk.bold.magentaBright.underline("\n\t TASK ADDED SUCCESSFULLY!!\n"));

        }
        toDos.push (addList.addtask);

     }
     //2.view work
       else if   (toDosList.tasks == "VIEW" ){
        console.log(chalk.bold.yellow("\n\t **TODOS LIST**\n"));
        chalk.bold.blue(toDos.forEach((toDos) => console.log(chalk.bold.green(toDos))));
        if (toDos.length > 0 ){
           // console.log(chalk.yellow(`YOUR TASK:${toDos}`))
        } else {
            console.log(chalk.bgGreen.yellow("\n\tTASK LIST IS EMPTY. ADD TASK FIRST!\n"))
        }
    }
    //3.update work.
    

     else if (toDosList.tasks == "UPDATE") {
        let update = await inquirer.prompt({
          name :"update1",
          type:"list",
          message:chalk.bold.yellow("WHAT YOU WANT TO UPDATE IN YOUR TODOS?"),
          choices: toDos.map((toDos) => (toDos)),

        });
        let addList = await inquirer.prompt({
            name:'task',
            type:"input",
            message:chalk.bold.yellow("WHAT TASK YOU WANT TO ADD IN YOUR TODOS?")
        });
        let newtodo = toDos.filter((val) => val ! == "update.update1")
        toDos= [...newtodo , addList.task]
        //toDos.forEach((toDos) => console.log(chalk.bold.green(toDos)));
       // console.log(chalk.bold.magentaBright.underline("\n\tTASK UPDATED SCCESSFULLY!!\n"))
        if (addList.task.length <= 0 ){
            console.log(chalk.bold.underline.redBright("\n\tENTER A VALID TASK..\n"))
             } else {
            toDos.forEach((toDos) => console.log(chalk.bold.green(toDos)));
    
            console.log(chalk.bold.magentaBright.underline("\n\t TASK ADDED SUCCESSFULLY!!\n"));
    
            }
//3.remove work.
    }else if (toDosList.tasks = "REMOVE"){
    
        let removeList = await inquirer.prompt({
            name:"remove",
            type:"list",
            message:chalk.yellow("WHAT YOU WANT TO REMOVE IN YOUR TODOS?"),
            choices: toDos.map((toDos) => (toDos)),

        });
        if(toDos.includes(removeList.remove)){
            let index:number = toDos.indexOf(removeList.remove)
            toDos.splice(index,1);
            console.log(chalk.bold.magentaBright.underline("\n\tTASK DELETE SUCCESSFULLY!!\n"))
        } else {
            console.log(chalk.bold.yellow("\n\tTASK NOT FOUND.\n"));
        }
    }
     if(toDosList == "EXIT"){
        break;
     }
     toDos;
} 


