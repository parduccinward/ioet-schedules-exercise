import stringUtils from './stringUtils.js';
const serviceUtils = {
    calculateCoincidences: (scheduleOne, scheduleTwo) => {
        let coincidences=0;
        for (const [key, value] of Object.entries(scheduleOne)){
            if(serviceUtils.checkBothWorkingInADay(value, scheduleTwo, key)){
                let timeOne = stringUtils.formatHourAndMinutes(value.start,value.end);
                let timeTwo = stringUtils.formatHourAndMinutes(scheduleTwo[key].start,scheduleTwo[key].end);
                if(serviceUtils.checkTimeOneIsAlwaysLesser(timeOne,timeTwo)){
                    [timeOne,timeTwo] = serviceUtils.exchangeTimeValues(timeOne, timeTwo);
                }
                if(serviceUtils.checkHoursMatch(timeOne, timeTwo)){
                    coincidences++;
                }else if(serviceUtils.checkHoursInRange(timeOne, timeTwo)){
                    coincidences++;
                }
                console.log(timeOne);
                console.log(timeTwo);
                console.log(coincidences);
            }
        }
        return coincidences;
    },
    checkWorkingDay: (value) => {
        return value.start !== "" || value.end!=="";
    },
    checkBothWorkingInADay: (value, scheduleTwo, key) => {
        return serviceUtils.checkWorkingDay(value) && serviceUtils.checkWorkingDay(scheduleTwo[key])
    },
    checkTimeOneIsAlwaysLesser: (timeOne,timeTwo) => {
        return timeOne.startHour>timeTwo.startHour;
    },
    checkHoursMatch: (timeOne, timeTwo) => {
        return timeOne.startHour===timeTwo.startHour 
        && timeOne.endHour===timeTwo.endHour && 
        timeOne.startMin===timeTwo.startMin && 
        timeOne.endMin===timeTwo.endMin;
    },
    checkHoursInRange: (timeOne, timeTwo) => {
        return timeOne.startHour<=timeTwo.startHour &&
        timeOne.endHour > timeTwo.startHour;
    },
    exchangeTimeValues: (timeOne, timeTwo) => {
        [timeOne, timeTwo] = [timeTwo, timeOne]
        return [timeOne,timeTwo];
    }
}
export default serviceUtils;