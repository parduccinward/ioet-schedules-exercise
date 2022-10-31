import retrieveData from "../utils/retrieveData.js";
import createSchedules from "../utils/createSchedules.js";
const scheduleModel ={
    getSchedules: async () => {
        const data = await retrieveData();
        const employeeSchedules = createSchedules(data);
        employeeSchedules.forEach(schedule => console.log(schedule.getWeek()));
    }
}
export default scheduleModel;