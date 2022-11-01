import scheduleService from "../services/scheduleService.js";
const cli = async () =>{
    console.log(await scheduleService.getWorkingCoincidences());
}
export default cli;