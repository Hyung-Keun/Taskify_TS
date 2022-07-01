import React from "react";
import { Todo } from "../model";
import { RiEditCircleFill, RiDeleteBinFill } from "react-icons/ri";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import "./styles.css";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <RiEditCircleFill />
        </span>
        <span className="icon">
          <RiDeleteBinFill />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <IoCheckmarkDoneCircleSharp />
        </span>
      </div>
    </form>
  );
};
export default SingleTodo;
