import * as Store from "./store";

export interface TeachersState {
  teachers: Store.Teacher[];
}

const exampleTeachers: Store.Teacher[] = [
  { id: 1, name: "Prof. Pedro" },
  { id: 2, name: "Prof. Tiago" },
  { id: 3, name: "Prof. Fabio" },
  { id: 4, name: "Prof. Diogo" },
];

const initialState = {
  teachers: exampleTeachers,
};

export type AddTeacherAction = { type: "ADD_TEACHER"; payload: Store.Teacher };

export const teachersReducer = (
  state: TeachersState = initialState,
  action: AddTeacherAction
) => {
  switch (action.type) {
    case "ADD_TEACHER": {
      return { ...state, teachers: [...state.teachers, action.payload] };
    }
    default:
      return state;
  }
};
