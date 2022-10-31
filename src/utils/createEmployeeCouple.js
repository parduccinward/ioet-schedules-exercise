import EmployeeCouple from '../entities/EmployeeCouple.js';
const createEmployeeCouple = (array) => {
    let employeeCouples = [];
    for(let i=0;i<array.length;i++) {
        for(let j=i;j<array.length;j++) {
            if(i!==j){
                const newCouple = EmployeeCouple(array[i],array[j]);
                employeeCouples.push(newCouple);
            }
        }
    }
    return employeeCouples;
}
export default createEmployeeCouple;