import serviceUtils from '../utils/serviceUtils';

const reneScheduleEx1 = {
    MO: { start: '10:00', end: '12:00' },
    TU: { start: '10:00', end: '12:00' },
    WE: { start: '', end: '' },
    TH: { start: '01:00', end: '03:00' },
    FR: { start: '', end: '' },
    SA: { start: '14:00', end: '18:00' },
    SU: { start: '20:00', end: '21:00' }
}

const astridScheduleEx1 = {
    MO: { start: '10:00', end: '12:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '12:00', end: '14:00' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '20:00', end: '21:00' }
}

const andresScheduleEx1 = {
    MO: { start: '10:00', end: '12:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '12:00', end: '14:00' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '20:00', end: '21:00' }
}

const reneScheduleEx2 = {
    MO: { start: '10:15', end: '12:00' },
    TU: { start: '10:00', end: '12:00' },
    WE: { start: '', end: '' },
    TH: { start: '13:00', end: '13:15' },
    FR: { start: '', end: '' }, 
    SA: { start: '14:00', end: '18:00' },
    SU: { start: '20:00', end: '21:00' }
}

const astridScheduleEx2 = {
    MO: { start: '10:00', end: '12:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '12:00', end: '14:00' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '20:00', end: '21:00' }
}

describe('Calculate coincidences between a couple of working schedules', () => {
    test("Astrid-Rene test Ex:1", () => {
        expect(serviceUtils.calculateCoincidences(astridScheduleEx1,reneScheduleEx1)).toBe(2);
    })
    test("Astrid-Andres test Ex:1", () => {
        expect(serviceUtils.calculateCoincidences(astridScheduleEx1,andresScheduleEx1)).toBe(3);
    })
    test("Rene-Andres test Ex:1", () => {
        expect(serviceUtils.calculateCoincidences(reneScheduleEx1,andresScheduleEx1)).toBe(2);
    })
    test("Astrid-Rene test Ex:2", () => {
        expect(serviceUtils.calculateCoincidences(astridScheduleEx2,reneScheduleEx2)).toBe(3);
    })
})

