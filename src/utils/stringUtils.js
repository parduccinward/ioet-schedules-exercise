const stringUtils ={
    separateByBreakLine: (text) =>{
        return text.split('\n');
    },
    getRowName: (text) => {
        return text.split('=')[0];
    },
    findDay: (text, day) => {
        return text.includes(day);
    },
    getHourRangeStartIndex: (text,day) => {
        return text.indexOf(day)+day.length;
    },
    getHourRangeEndIndex: (text,day,startIndex) => {
        const reducedString = stringUtils.getStringStartingByDay(text,day);
        return (stringUtils.thereAreMoreDays(reducedString)) ? startIndex+reducedString.indexOf(','):startIndex+reducedString.length;
    },
    thereAreMoreDays: (text) => {
        return (text.indexOf(',')!==-1) ? true:false;
    },
    getHourRange: (text, day) => {
        const startIndex = stringUtils.getHourRangeStartIndex(text,day);
        const endIndex = stringUtils.getHourRangeEndIndex(text,day,startIndex)
        return text.slice(startIndex,endIndex);
    },
    getStringStartingByDay: (text,day) => {
        return text.slice(stringUtils.getHourRangeStartIndex(text,day));
    },
    getStartAndEndHours: (text) => {
        let array = text.split('-');
        const hours = {
            start:array[0],
            end:array[array.length-1]
        }
        return hours;
    },
    formatHourAndMinutes: (start,end) => {
        let startTime = start.split(':');
        let endTime = end.split(':');
        const time = {
            startHour: startTime[0],
            startMin: startTime[startTime.length-1],
            endHour: endTime[0],
            endMin: endTime[endTime.length-1]
        }
        return time;
    }
}
export default stringUtils;