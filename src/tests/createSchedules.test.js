import createSchedules from '../utils/createSchedules.js';

const data = 
    "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\n"+
    "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\n"+
    "ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00"


describe('Create an array of employee schedules', () => {
    test.skip('fail with this test', () => {
        expect(createSchedules(data)).toBeTruthy();
    })
    test('count employees', () => {
        expect(createSchedules(data)).toEqual(3);
    })
})