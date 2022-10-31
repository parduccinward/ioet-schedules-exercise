import scheduleService from "../services/scheduleService.js";
const cli = () =>{
    scheduleService.getWorkingCoincidences();
}
export default cli;