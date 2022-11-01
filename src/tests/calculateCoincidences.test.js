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

const oneMinTestSchedule1 = {
    MO: { start: '07:59', end: '08:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '', end: '' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '', end: '' }
}

const oneMinTestSchedule2 = {
    MO: { start: '06:00', end: '09:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '', end: '' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '', end: '' }
}

const exclusiveTestSchedule1 = {
    MO: { start: '08:00', end: '10:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '', end: '' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '', end: '' }
}

const exclusiveTestSchedule2 = {
    MO: { start: '10:00', end: '12:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '', end: '' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '', end: '' }
}

const pastMidnightWork1 = {
    MO: { start: '05:00', end: '07:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '', end: '' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '', end: '' }
}

const pastMidnightWork2 = {
    MO: { start: '22:00', end: '06:00' },
    TU: { start: '', end: '' },
    WE: { start: '', end: '' },
    TH: { start: '', end: '' },
    FR: { start: '', end: '' },
    SA: { start: '', end: '' },
    SU: { start: '', end: '' }
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
    test("Coincidence by one minute", () => {
        expect(serviceUtils.calculateCoincidences(oneMinTestSchedule1,oneMinTestSchedule2)).toBe(1);
    })
    test("Exclusive coincidence, one arriving the other lefting", () => {
        expect(serviceUtils.calculateCoincidences(exclusiveTestSchedule1,exclusiveTestSchedule2)).toBe(0);
    })
    test("Check past midnight work", () => {
        expect(serviceUtils.calculateCoincidences(pastMidnightWork1, pastMidnightWork2)).toBe(1);
    })
})

