console.log("Welcome to the Employee Wage Problem.\n");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck){
    case IS_PART_TIME:
        console.log("Part-Time Employee is Present.");
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        console.log("Full-Time Employee is Present.");
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        console.log("Employee is Absent.");
        empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log ("Employee Wage: " + empWage);