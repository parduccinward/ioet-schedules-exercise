import stringUtils from '../utils/stringUtils.js'
const Schedule = (string) => {
    let name= stringUtils.getRowName(string);
    let week={
        mon:{
            start:"",
            end:""
        },
        tue:{
            start:"",
            end:""
        },
        wed:{
            start:"",
            end:""
        },
        thu:{
            start:"",
            end:""
        },
        fri:{
            start:"",
            end:""
        },
        sat:{
            start:"",
            end:""
        },
        sun:{
            start:"",
            end:""
        }
    }
    // create function that fills week
    const getName = () => name;
    return {name,getName}
}
export default Schedule;