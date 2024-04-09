export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let first = true;

  for (const employeeName of reportWithIterator) {
    if (!first) {
      result += ' | ';
    }
    result += employeeName;
    first = false;
  }

  return result;
}
