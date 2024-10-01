export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department of Object.values(report.allEmployees)) {
    allEmployees = allEmployees.concat(department);
  }

  return allEmployeesSymbol.iterator;
}
