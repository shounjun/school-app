import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { classesReducer } from "./classesReducer";
import { studentsReducer } from "./studentsReducer";
import { teachersReducer } from "./teachersReducer";
// ...

export interface Class {
  id: number;
  name: string;
  students: Student[];
  teacher: Teacher;
}

export interface Student {
  id: number;
  name: string;
}

export interface Teacher {
  id: number;
  name: string;
}

export const store = configureStore({
  reducer: {
    classes: classesReducer,
    students: studentsReducer,
    teachers: teachersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
