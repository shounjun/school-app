import * as Store from "./store";

export interface ClassesState {
  classes: Store.Class[];
}

const exampleClasses: Store.Class[] = [
  {
    id: 0,
    name: "Portuguese",
    students: [{ id: 1, name: "Joao" }],
    teacher: { id: 1, name: "Prof. Pedro" },
  },
  {
    id: 1,
    name: "Math",
    students: [
      { id: 1, name: "Joao" },
      { id: 2, name: "Ana" },
    ],
    teacher: { id: 3, name: "Prof. Fabio" },
  },
];

const initialState = {
  classes: exampleClasses,
};

export type ClassAction =
  | { type: "ADD_CLASS"; payload: Store.Class }
  | { type: "EDIT_CLASS"; payload: Store.Class }
  | { type: "REMOVE_CLASS"; payload: Store.Class };

export const classesReducer = (
  state: ClassesState = initialState,
  action: ClassAction
): ClassesState => {
  switch (action.type) {
    case "ADD_CLASS": {
      return { ...state, classes: [...state.classes, action.payload] };
    }
    default:
      return state;
  }
};
