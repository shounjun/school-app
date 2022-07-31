import { Link } from "react-router-dom";

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

const Classes = (props: any) => {
  const classes = props.classes.classes;
  const classesElements = [];
  classes.forEach((element, i) => {
    classesElements.push(
      <div key={element.id}>
        <button>{element.name}</button>
        <button>
          <Link to={`/classes/edit/${element.id}`}>Edit</Link>
        </button>
        <button>Remove</button>
      </div>
    );
  });

  return (
    <section className="">
      <p>Classes</p>
      {classesElements}
      <Link to="/classes/create">Create new Class</Link>
    </section>
  );
};

export default Classes;
