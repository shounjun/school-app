import {
  Class,
  Student,
  useAppDispatch,
  useAppSelector,
} from "../../store/store";
import { classesReducer } from "../../store/classesReducer";
import { useReducer } from "react";
import { useParams } from "react-router-dom";

interface ClassFormProps {
  initialClass: Class;
}

type ClassParams = {
  id: string;
};

const ClassForm = (props: any) => {
  const state = useAppSelector((state) => state);
  const { id } = useParams<ClassParams>();
  const currentClass = state.classes.classes[id];
  const classes = state.classes.classes;
  const teachers = state.teachers.teachers;
  const students = state.students.students;

  const studentsElements = [];
  const teachersDropdown = [];

  students.forEach((student, i) => {
    const checked =
      currentClass?.students?.find((otherStudent: Student) => {
        return otherStudent.id === student.id;
      }) !== undefined;
    studentsElements.push(
      <div key={i}>
        <p>
          {student.name}
          <input type="checkbox" defaultChecked={checked}></input>
        </p>
      </div>
    );
  });

  teachers.forEach((teacher, i) => {
    const selected = currentClass?.teacher.id === teacher.id;
    teachersDropdown.push(
      <option key={teacher.id} value={teacher.name}>
        {teacher.name}
      </option>
    );
  });

  return (
    <section className="">
      <div>
        <p>Class Name: </p>
        <input type="text" defaultValue={currentClass?.name}></input>
      </div>
      <div>
        <p>Class Teacher:</p>
        <select
          name="teachers"
          id="teachersDropdown"
          defaultValue={currentClass?.teacher.name}
        >
          {teachersDropdown}
        </select>
      </div>
      <div>
        <p>Students</p>
        {studentsElements}
      </div>
      <button>Save</button>
    </section>
  );
};

export default ClassForm;
