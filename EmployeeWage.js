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
let empDailyWageMap = new Map();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empDailyWageArr.push(calculateWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateWage(empHrs));
}

let totalEmpWage = calculateWage(totalEmpHrs);
console.log("Monthly Employee Wage: " + totalEmpWage + "\nTotal Working Days: " + totalWorkingDays +
    "\nTotal Hrs worked: " + totalEmpHrs);

console.log("\n-----------Array Data Structure-----------")
console.log("UC6 - Daily Wages Earned using Array: ");
console.log(empDailyWageArr);

// Array Helper Functions
console.log("\n-----------Array Helper Functions-----------");
// UC 7A - Calculate total wage using Array forEach or reduce method.
totalEmpWage = 0;
function calcTotalWage(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(calcTotalWage);
console.log("UC7A - Total Emp Wage using forEach method: " + totalEmpWage);

function getTotalWage(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Total Emp Wage using reduce method: " + empDailyWageArr.reduce(getTotalWage, 0));

// UC 7B - Show the Day along with Daily Wage using Array map helper function.
let dailyCount = 0;
function mapDayWithWage(dailyWage) {
    dailyCount++;
    return "Day" + dailyCount + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily EmpWage using Map method: ");
console.log(mapDayWithWageArr);

// UC 7C = Show Days when Full time wage of 160 were earned using filter function.
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Days when FullTime Wage earned using filter method: ");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full Time Wage was earned using find function
console.log("UC7D - First time Fulltime Wage was earned on: " + mapDayWithWageArr.find(fullTimeWage));

// UC 7E - Check if Every Element of FullTime Wage is truely holding FullTime Wage.
console.log("UC 7E - Check if all element of fullDayWage Array has FullTimeWage: " + fullDayWageArr.every(fullTimeWage));

// UC 7F - Check if there is any PartTime Wage.
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if any PartTime Wage: " + mapDayWithWageArr.some(partTimeWage));

// UC 7G - Find the number of days the employee worked.
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G - Number of days Employee worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));

// UC 8 - Use Map to store the daily Wages and compute the total wage.
console.log("\n-----------Map Data Structure-----------")
console.log("UC8 - Daily Wages earned Using Map: ");
console.log(empDailyWageMap);
console.log("Total Emp Wage using Map: " + Array.from(empDailyWageMap.values()).reduce(getTotalWage, 0));