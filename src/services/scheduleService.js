import scheduleModel from '../models/scheduleModel.js';
import createEmployeeCouple from '../utils/createEmployeeCouple.js';
const scheduleService ={
    getWorkingHours: async () => {
        const employeeSchedules = await scheduleModel.getSchedules();
        const employeeCouples = createEmployeeCouple(employeeSchedules);
        employeeCouples.forEach(couple => {
            console.log(couple.getEmployeeOneName()+" "+couple.getEmployeeTwoName());
        })
    }
}
export default scheduleService;