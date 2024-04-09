export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(obj) {
      return Object.keys(obj).length;
    },
  };

  return report;
}
