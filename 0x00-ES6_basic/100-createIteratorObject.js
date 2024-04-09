export default function createIteratorObject(report) {
  const iterable = [];
  for (const value of Object.values(report.allEmployees)) {
    iterable.push(...value);
  }
  return iterable[Symbol.iterator]();
}
