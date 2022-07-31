import * as Store from "./store";

export interface StudentsState {
  students: Store.Student[];
}

const exampleStudents: Store.Student[] = [
  { id: 1, name: "Joao" },
  { id: 2, name: "Ana" },
  { id: 3, name: "Rui" },
  { id: 4, name: "Sara" },
  { id: 5, name: "Isaac" },
];

const initialState = {
  students: exampleStudents,
};

export type AddStudentAction = { type: "ADD_STUDENT"; payload: Store.Student };

export const studentsReducer = (
  state: StudentsState = initialState,
  action: AddStudentAction
) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      return { ...state, students: [...state.students, action.payload] };
    }
    default:
      return state;
  }
};
