import { useSelector, useDispatch } from "react-redux";
import { removeTodo, menuToggle, editTodo } from "./futures/todo/TodoSlice";
import { CiBellOff } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

const PostOfTodos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const toggle = useSelector((state) => state.todoReducer.toggle);
  console.log(todos);
  console.log(toggle);

  const dispatch = useDispatch();

  const handleEdith = (id, edit) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditMode(id);
    setEditedTodo({
      name: todoToEdit.name,
      email: todoToEdit.email,
      age: todoToEdit.age,
    });
  };

  return (
    <div>
      List of the
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              width: "400px",
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul>
              <li>{todo.text}</li>
              <li>{todo.email}</li>
              <li>{todo.age}</li>
              <button onClick={handleEdith}>
                <CiEdit />
              </button>
            </ul>
            <button
              style={{ height: "1.5rem", width: "6rem" }}
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
            <button onClick={() => dispatch(menuToggle())}>
              {toggle ? <FaRegBell /> : <CiBellOff />}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostOfTodos;
