class Student {
  name: string;
}

class Teacher {
  name: string;
}

class Class {
  students: Array<Student> = [];
  subject: string;
  teacher: Teacher;
}

const Professors = () => {};

export default Professors;
