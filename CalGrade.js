
// 2. Write a JavaScript program to
// a) Calculate grades on basis of marks
// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F
// b) Map the grades of each student
// c) Group students according to the grades they have received and display.
// Sample Input:
// let students = [
// { name: "John", marks: “92” },
// { name: "Oliver", marks: “85” },
// { name: "Michael", marks: “79” },
// { name: "Dwight", marks: “95”},
// { name: "Oscar", marks: “64” },
// { name: "Kevin", marks: “48” },
// ];
// Output:

// {
// 'A': [ { name: "John", grade: “A” },
// { name: "Dwight", grade: “A” } ],
// 'B': [ { name: "Oliver", grade: “B” } ],
// 'C': [ { name: "Michael", grade: “C” } ],
// 'D': [ { name: "Oscar", grade: “D” } ],
// 'E': [ ],
// 'F': [ { name: "Kevin", grade: “F” } ],
// }

let students = [
  { name: "John", marks: 92 },
  { name: "Oliver", marks: 85 },
  { name: "Michael", marks: 79 },
  { name: "Dwight", marks: 95 },
  { name: "Oscar", marks: 64 },
  { name: "Kevin", marks: 48 }
];

const calculateGrades = (marks) => {
  if (marks > 90) return "A";
  if (marks > 80) return "B";
  if (marks > 70) return "C";
  if (marks > 60) return "D";
  if (marks > 50) return "E";
  return "F";
};

const studentsWithGrades = students.map(student => {
  const grade = calculateGrades(student.marks);
  return { ...student, grade };
});

const groupedStudents = studentsWithGrades.reduce((acc, cur) => {
  acc[cur.grade] = acc[cur.grade] || [];
  acc[cur.grade].push(cur);
  return acc;
}, {});

console.log(groupedStudents);
