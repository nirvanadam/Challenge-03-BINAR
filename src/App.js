// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Delete from "./component/Delete";
import TodoList from "./component/TodoList";
import TodoSearch from "./component/TodoSearch";
import Add from "./pages/Add";
import All from "./pages/All";
import Done from "./pages/Done";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <TodoSearch />
        <TodoList />
        <Routes>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/all" element={<All />}></Route>
          <Route path="/done" element={<Done />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
        <Delete />
      </BrowserRouter>
    </>
  );
}

export default App;
