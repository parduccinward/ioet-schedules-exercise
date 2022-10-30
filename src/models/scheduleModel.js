import retrieveData from "../utils/retrieveData.js";
const scheduleModel ={
    getSchedules: async () => {
        const schedules = await retrieveData();
        console.log(schedules);
    }
}
export default scheduleModel;