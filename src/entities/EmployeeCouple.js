const EmployeeCouple = (employeeOne, employeeTwo) => {
    
    const getEmployeeOneName = () => employeeOne.getName();
    const getEmployeeTwoName = () => employeeTwo.getName();

    return {getEmployeeOneName, getEmployeeTwoName};
}
export default EmployeeCouple;