import stringUtils from '../utils/stringUtils.js'
import Schedule from '../entities/Schedule.js'
const createSchedules = (data) => {
    let schedules = []; 
    const employeeSchedules = stringUtils.separateByBreakLine(data);
    let schedule;
    for(let i = 0; i < employeeSchedules.length; i++) {
        schedule = Schedule(employeeSchedules[i]);
        schedules.push(schedule);
    }
    schedules.forEach((schedule) => console.log(schedule.getName()));
    //create an object for each employee from entities
    //return an array of Schedules
}
export default createSchedules;