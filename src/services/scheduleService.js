import scheduleModel from "../models/scheduleModel.js";
const scheduleService ={
    getWorkingHours: () => {
        scheduleModel.getSchedules();
    }
}
export default scheduleService;