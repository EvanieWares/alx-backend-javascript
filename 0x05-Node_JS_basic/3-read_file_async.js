const fs = require('fs');

async function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const students = await new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      resolve(data.split('\n').map(student => student.split(',')));
    });
  });

  students.shift();

  const studentData = students.reduce((acc, student) => {
    const [id, name, ...otherData] = student;
    const major = otherData[otherData.length - 1];
    acc[major] = acc[major] || { count: 0, students: [] };
    acc[major].count++;
    acc[major].students.push(name);
    return acc;
  }, {});

  const totalStudents = students.filter(student => student.length > 3).length;

  console.log(`Number of students: ${totalStudents}`);

  Object.keys(studentData).forEach(major => {
    const { count, students } = studentData[major];
    console.log(`Number of students in ${major}: ${count}. List: ${students.join(', ')}`);
  });

  return [students, studentData, totalStudents];
}

module.exports = countStudents;
