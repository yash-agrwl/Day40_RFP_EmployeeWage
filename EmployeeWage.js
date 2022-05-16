console.log("Welcome to the Employee Wage Problem.\n");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let TotalEmpHrs = 0;
for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    TotalEmpHrs += empHrs;
}
let empWage = TotalEmpHrs * WAGE_PER_HOUR;
console.log("Monthly Employee Wage: " + empWage + "\nTotal Hrs worked in the resp month: " + TotalEmpHrs);