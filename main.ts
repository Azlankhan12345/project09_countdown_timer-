#! /usr/bin/env node
import { differenceInSeconds } from 'date-fns';
import inquirer from "inquirer";


let one = await inquirer.prompt({
    type: "number",
    name: "user",
    message: "Please enter the amount in second: "
})
let getNum = one.user

function second(x: number){
    const interTime = new Date().setSeconds(new Date().getSeconds() + x)
    const checkTime = new Date(interTime)
    setInterval(() => {
        const currTime = new Date()
        const timeDiff = differenceInSeconds(checkTime, currTime)
        if(timeDiff <= 0) {
            console.log("Timer expired!")
            process.exit()
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600)
        const sec = Math.floor(timeDiff % 60)
        console.log(`${min}:${sec}`)
    }, 1000);
}
second(getNum)
