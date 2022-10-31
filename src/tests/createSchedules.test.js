import createSchedules from '../utils/createSchedules.js';

const data = 
    "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\n"+
    "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\n"+
    "ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00"


describe('Create an array of employee schedules', () => {
    test.skip('fail first test', () => {
        expect(createSchedules(data)).toBeTruthy();
    })
    test.skip('count employees', () => {
        expect(createSchedules(data)).toEqual(3);
    })
    test.skip('get employee names', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        createSchedules(data)
        expect(consoleSpy).toHaveBeenCalledWith('RENE');
        expect(consoleSpy).toHaveBeenCalledWith('ASTRID');
        expect(consoleSpy).toHaveBeenCalledWith('ANDRES');
    })
    test.skip('get schedule week for employee 1', () => {
        let week={
            MO:{
                start:"10:00",
                end:"12:00"
            },
            TU:{
                start:"10:00",
                end:"12:00"
            },
            WE:{
                start:"",
                end:""
            },
            TH:{
                start:"01:00",
                end:"03:00"
            },
            FR:{
                start:"",
                end:""
            },
            SA:{
                start:"14:00",
                end:"18:00"
            },
            SU:{
                start:"20:00",
                end:"21:00"
            }
        }
        expect(createSchedules(data)).toEqual(week);
    })
})