enum Gender {
    male = "male", female = "female"
   }
   

interface Student {
    id: number;
    name: string;
    entered: number;
    grade: number;
    gender: Gender
   };
   for (let student of [
    {
    id: 1, name: "John Brown", 
    entered: 1997, grade: 4,
    gender: Gender.male
    },
    /* {
    id: "1", name: "John Brown”, 
    entered: 1997, grade: 4,
    gender: Gender.male
    }, 
    {
    id: 1, name: "John Brown", 
    entered: 1997, grade: 4,
    gender: "male"
    } */
   ]) {
    printStudent(student);
   }
   function printStudent(student: Student) {
    console.log(`${student.id} ${student.name} entered: ${student.entered} grade: ${student.grade} gender: ${student.gender}`);
   }
