const fs = require('fs');

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const counters = {};

    for (let i = 1; i < lines.length; i += 1) {
      const [firstName, , , field] = lines[i].split(',');
      if (field) {
        counters[field] = counters[field] || { count: 0, names: [] };
        counters[field].count += 1;
        counters[field].names.push(firstName.trim());
      }
    }

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in counters) {
      if (Object.prototype.hasOwnProperty.call(counters, field)) {
        console.log(
          `Number of students in ${field}: ${
            counters[field].count
          }. List: ${counters[field].names.join(', ')}`,
        );
      }
    }
  } catch (error) {
    console.error('Error loading the database:', error.message);
  }
}

module.exports = countStudents;
