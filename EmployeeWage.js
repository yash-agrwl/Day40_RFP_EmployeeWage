console.log("Welcome to the Employee Wage Problem.\n");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

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

function calculateWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empDailyWageArr.push(calculateWage(empHrs));
}

let totalEmpWage = calculateWage(totalEmpHrs);
console.log("Daily Wages Earned: " + empDailyWageArr);
console.log("Monthly Employee Wage: " + totalEmpWage + "\nTotal Days Worked: " + totalWorkingDays +
    "\nTotal Hrs worked: " + totalEmpHrs);