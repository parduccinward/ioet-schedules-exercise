import retrieveData from "../utils/retrieveData.js";
const scheduleModel ={
    getSchedules: () => {
        const schedules = retrieveData();
        console.log(schedules);
    }
}
export default scheduleModel;