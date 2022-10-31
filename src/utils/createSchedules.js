import stringUtils from '../utils/stringUtils.js'
import Schedule from '../entities/Schedule.js'
const createSchedules = (data) => {
    let schedules = []; 
    const employeeSchedules = stringUtils.separateByBreakLine(data);
    for(let i = 0; i < employeeSchedules.length; i++) {
        const schedule = Schedule(employeeSchedules[i]);
        schedules.push(schedule);
    }
    return schedules;
}
export default createSchedules;