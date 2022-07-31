/* eslint-disable react/jsx-no-comment-textnodes */
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import Classes from "./pages/Classes/Classes";
import ClassForm from "./pages/Classes/ClassForm";
import HomePage from "./pages/HomePage";
import { ClassesState } from "./store/classesReducer";

function App() {
  const classes = useSelector<ClassesState, ClassesState["classes"]>(
    (state) => state.classes
  );

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/classes">
          <Classes classes={classes} />
        </Route>
        <Route path="/classes/create">
          <ClassForm />
        </Route>
        <Route path="/classes/edit/:id">
          <ClassForm />
        </Route>
        <Route path="/students">
          <Classes />
        </Route>
        <Route path="/professors">
          <Classes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
