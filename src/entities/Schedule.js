import stringUtils from '../utils/stringUtils.js'
const Schedule = (string) => {
    let name= stringUtils.getRowName(string);
    let week={
        MO:{
            start:'',
            end:''
        },
        TU:{
            start:'',
            end:''
        },
        WE:{
            start:'',
            end:''
        },
        TH:{
            start:'',
            end:''
        },
        FR:{
            start:'',
            end:''
        },
        SA:{
            start:'',
            end:''
        },
        SU:{
            start:'',
            end:''
        }
    }
    const getName = () => name;
    const getWeek = () => week;

    const getHours = (day) => {
        const hours = stringUtils.getHourRange(string, day);
        return stringUtils.getStartAndEndHours(hours);
    }
    const getAllDays = () => {
        return Object.keys(week);
    }
    const populateWeek = () => {
        const days = getAllDays();
        days.forEach((day) => {
            if(isTheDayInSchedule(day)===true){
                const hours = getHours(day);
                week[day].start = hours.start;
                week[day].end = hours.end;
            }
        })
    }
    const isTheDayInSchedule = (day) => {
        return (stringUtils.findDay(string, day)) ? true : false;
    }
    populateWeek();
    return {getName, getWeek}
}
export default Schedule;