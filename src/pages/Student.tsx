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

const Classes = () => {
  const joao = new Student();
  joao.name = "Joao";

  const ana = new Student();
  ana.name = "Ana";

  const mathTeacher = new Teacher();
  mathTeacher.name = "Prof. Pedro";

  const classMath = new Class();
  classMath.subject = "Math";
  classMath.students.push(joao);
  classMath.students.push(ana);
  classMath.teacher = mathTeacher;

  return (
    <section className="">
      <p>testesdsdfsf</p>
    </section>
  );
};

export default Classes;
