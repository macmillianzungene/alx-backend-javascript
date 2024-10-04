export default function createIteratorObject(report) {
  let departmentIndex = 0;
  let employeeIndex = 0;
  return {
    next() {
      while (departmentIndex < report.departments.length) {
        const department = report.departments[departmentIndex];

        if (employeeIndex < department.employees.length) {
          const employee = department.employees[employeeIndex];
          employeeIndex += 1;
          return { value: employee, done: false };
        }
        departmentIndex += 1;
        employeeIndex = 0;
      }
      return { done: true };
    },
  };
}
