import stringUtils from './stringUtils.js';
const serviceUtils = {
    calculateCoincidences: (scheduleOne, scheduleTwo) => {
        let coincidences=0;
        for (const [key, value] of Object.entries(scheduleOne)){
            if(serviceUtils.checkBothWorkingInADay(value, scheduleTwo, key)){
                let timeOne = stringUtils.formatHourAndMinutes(value.start,value.end);
                let timeTwo = stringUtils.formatHourAndMinutes(scheduleTwo[key].start,scheduleTwo[key].end);
                if(serviceUtils.checkPastMidnightWork(timeOne,timeTwo)){
                    if(timeOne.startHour>timeOne.endHour){
                        [timeOne,timeTwo] = serviceUtils.exchangeTimeValues(timeOne, timeTwo);
                    }
                    if(serviceUtils.checkHoursInRangePastMidnight(timeOne,timeTwo)) coincidences++;
                }else{
                    if(serviceUtils.checkTimeOneIsAlwaysLesser(timeOne,timeTwo)){
                        [timeOne,timeTwo] = serviceUtils.exchangeTimeValues(timeOne, timeTwo);
                    }
                    if(serviceUtils.checkHoursMatch(timeOne, timeTwo))coincidences++;
                    else if(serviceUtils.checkHoursInRange(timeOne, timeTwo))coincidences++;
                }
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
    checkPastMidnightWork: (timeOne, timeTwo) => {
        return (timeOne.startHour>timeOne.endHour) || (timeTwo.startHour>timeTwo.endHour)
    },
    checkHoursInRange: (timeOne, timeTwo) => {
        return timeOne.startHour<=timeTwo.startHour &&
        timeOne.endHour > timeTwo.startHour;
    },
    checkHoursInRangePastMidnight: (timeOne, timeTwo) => {
        return (timeOne.startHour<=timeTwo.endHour && 
        timeTwo.endHour<timeOne.endHour) || 
        (timeOne.startHour<timeTwo.startHour && 
        timeTwo.startHour<=timeOne.endHour);
    },
    exchangeTimeValues: (timeOne, timeTwo) => {
        [timeOne, timeTwo] = [timeTwo, timeOne]
        return [timeOne,timeTwo];
    }
}
export default serviceUtils;