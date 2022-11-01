import scheduleModel from '../models/scheduleModel.js';
import createEmployeeCouple from '../utils/createEmployeeCouple.js';
const scheduleService ={
    getWorkingCoincidences: async () => {
        const employeeSchedules = await scheduleModel.getSchedules();
        const employeeCouples = createEmployeeCouple(employeeSchedules);
        let outputString = '';
        employeeCouples.forEach(couple => {
            outputString+=couple.getEmployeeOneName()+"-"+couple.getEmployeeTwoName()+":"+couple.getCoincidences()+"\n";
        })
        return outputString;
    }
}
export default scheduleService;