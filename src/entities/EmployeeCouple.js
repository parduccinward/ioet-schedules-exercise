import serviceUtils from '../utils/serviceUtils.js'
const EmployeeCouple = (employeeOne, employeeTwo) => {
    let coincidences = serviceUtils.calculateCoincidences(employeeOne.getWeek(), employeeTwo.getWeek());

    const getEmployeeOneName = () => employeeOne.getName();
    const getEmployeeTwoName = () => employeeTwo.getName();

    const getCoincidences = () => coincidences;

    return {getEmployeeOneName, getEmployeeTwoName, getCoincidences};
}
export default EmployeeCouple;